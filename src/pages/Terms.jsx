import React from "react";


const Terms = () => {
  return (
    <section
      className="terms-section"
      style={{
        padding: "80px 20px",
        color: "#eee",
        background: "#0f0f0f",
        lineHeight: "1.8",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h1
          style={{
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Website Maintenance Policy
        </h1>

        <p>
          This page explains how Onligro handles website support and maintenance
          for all clients. The goal is to keep every client informed and avoid
          confusion about what’s included in maintenance and what counts as a
          new feature request.
        </p>

      

        <h2>2️⃣ What’s Included in Monthly Maintenance (₹799/month)</h2>
        <ul>
          <li>Minor text or image updates (up to 2 changes per month)</li>
          <li>Fixing small bugs or broken links</li>
          <li>Website uptime and performance monitoring</li>
          <li>Basic security and plugin updates</li>
          <li>Backup management and recovery support</li>
          <li>Domain or hosting renewal reminders</li>
        </ul>

        <h2>3️⃣ What’s NOT Included in Maintenance</h2>
        <p>
          The following changes are considered **new features or new work** and
          are not covered under monthly maintenance. These are always billed
          separately:
        </p>
        <ul>
          <li>Adding new pages or new sections to the website</li>
          <li>Adding new functionality (e.g., booking system, new form, etc.)</li>
          <li>Design changes, redesign, or layout restructuring</li>
          <li>Logo changes, color theme changes, or branding redesign</li>
          <li>Adding animations, transitions, or new effects</li>
          <li>Custom coding or integrating new APIs</li>
        </ul>

        <h2>4️⃣ Why New Features Are Not Free</h2>
        <p>
          Every new section or feature requires additional design, development,
          and testing time. These are not part of the existing website structure
          and therefore are treated as new development.  
          This ensures fair value for time and effort while maintaining smooth
          support for all existing clients equally.
        </p>

        <h2>5️⃣ Communication & Support</h2>
        <p>
          For any changes or requests, please contact:  
          📧{" "}
          <a
            href="mailto:rajaprofessional181261@gmail.com"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            rajaprofessional181261@gmail.com
          </a>{" "}
          or WhatsApp at <b>+91 90384 59931</b>.  
          We’ll review the request and inform you whether it’s covered under
          maintenance or considered a new paid feature.
        </p>

        <h2>6️⃣ Transparency Promise</h2>
        <p>
          At Onligro, our goal is transparency and fairness.  
          All updates, whether small or big, are discussed clearly before work
          begins.  
          This helps both sides stay aligned and avoid any misunderstanding in
          the future.
        </p>

        <p style={{ marginTop: "2rem", textAlign: "center", color: "#aaa" }}>
          © {new Date().getFullYear()} Onligro Studio | Created by Mohammed Raza
        </p>
      </div>
    </section>
  );
};

export default Terms;
