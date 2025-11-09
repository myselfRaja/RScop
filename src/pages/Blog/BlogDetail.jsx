import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../../blogData";
import "./Blog.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog Not Found 😢</h2>
        <Link to="/blog" className="back-btn">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <img src={blog.image} alt={blog.title} className="blog-banner" />
        <h1 className="blog-title">{blog.title}</h1>
        <p className="date">{blog.date}</p>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>

        <Link to="/blog" className="back-btn">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
