import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../blogData";
import "./Blog.css";

const BlogList = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Our Latest Blogs</h1>
      <p className="blog-subtitle">Insights & Ideas from Onligro Solutions</p>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-thumb" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="date">{blog.date}</p>
              <p>{blog.excerpt}</p>
              <Link to={`/blog/${blog.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
