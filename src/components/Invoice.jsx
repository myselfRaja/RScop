import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Invoice.css";

export default function InvoiceForm() {
  const [invoice, setInvoice] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: new Date().toISOString().slice(0, 10),
    clientName: "",
    clientEmail: "",
    projectName: "",
    items: [{ description: "", price: "", quantity: 1 }],
    taxRate: 18,
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: invoice.invoiceNumber,
  });

  const handleItemChange = (index, field, value) => {
    const updated = [...invoice.items];
    updated[index][field] = value;
    setInvoice({ ...invoice, items: updated });
  };

  const addItem = () => {
    setInvoice({ ...invoice, items: [...invoice.items, { description: "", price: "", quantity: 1 }] });
  };

  const removeItem = (index) => {
    const updated = invoice.items.filter((_, i) => i !== index);
    setInvoice({ ...invoice, items: updated });
  };

  const subtotal = invoice.items.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
  const taxAmount = (subtotal * invoice.taxRate) / 100;
  const total = subtotal + taxAmount;

  return (
    <div className="invoice-wrapper">
      <h2>Create Invoice</h2>

      <div className="invoice-form">
        <input
          type="text"
          placeholder="Client Name"
          value={invoice.clientName}
          onChange={(e) => setInvoice({ ...invoice, clientName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Client Email"
          value={invoice.clientEmail}
          onChange={(e) => setInvoice({ ...invoice, clientEmail: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project / Service Name"
          value={invoice.projectName}
          onChange={(e) => setInvoice({ ...invoice, projectName: e.target.value })}
        />

        <div className="invoice-items">
          {invoice.items.map((item, i) => (
            <div key={i} className="invoice-item">
              <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(i, "description", e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(i, "price", e.target.value)}
              />
              <input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) => handleItemChange(i, "quantity", e.target.value)}
              />
              <button onClick={() => removeItem(i)}>✕</button>
            </div>
          ))}
          <button className="add-item" onClick={addItem}>+ Add Item</button>
        </div>

        <input
          type="number"
          placeholder="Tax Rate (%)"
          value={invoice.taxRate}
          onChange={(e) => setInvoice({ ...invoice, taxRate: e.target.value })}
        />

        <button className="generate-btn" onClick={handlePrint}>
          Download PDF
        </button>
      </div>

      {/* === Invoice Preview (Printable Area) === */}
      <div className="invoice-preview" ref={componentRef}>
        <h3>Invoice</h3>
        <div className="invoice-header">
          <div>
            <strong>Onligro Studio</strong>
            <p>support@onligro.com</p>
            <p>Date: {invoice.date}</p>
          </div>
          <div>
            <p><strong>Invoice #</strong> {invoice.invoiceNumber}</p>
          </div>
        </div>

        <hr />

        <p><strong>Bill To:</strong> {invoice.clientName || "Client Name"}</p>
        <p>{invoice.clientEmail}</p>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => (
              <tr key={i}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-total">
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Tax ({invoice.taxRate}%): ₹{taxAmount.toFixed(2)}</p>
          <h4>Total: ₹{total.toFixed(2)}</h4>
        </div>

        <p className="footer-text">Thank you for choosing Onligro!</p>
      </div>
    </div>
  );
}
