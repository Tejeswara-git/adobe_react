import React, { useEffect, useState } from 'react';
import { blogsData } from '../../data/blogsData';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Extract ID from hash: e.g., #/blog-detail?id=1
    const hash = window.location.hash;
    const queryString = hash.split('?')[1];
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get('id');

    if (blogId) {
      const foundBlog = blogsData.find(b => b.id === blogId);
      setBlog(foundBlog);

      if (foundBlog) {
        // Find related blogs by category, excluding the current one
        const related = blogsData
          .filter(b => b.category === foundBlog.category && b.id !== foundBlog.id)
          .slice(0, 3);
        
        // If not enough related by category, just grab some recent ones
        if (related.length < 3) {
          const others = blogsData.filter(b => b.id !== foundBlog.id && !related.includes(b)).slice(0, 3 - related.length);
          setRelatedBlogs([...related, ...others]);
        } else {
          setRelatedBlogs(related);
        }
      }
    }
    
    // Scroll to top when blog changes
    window.scrollTo(0, 0);
  }, [window.location.hash]);

  if (!blog) {
    return (
      <main className="subpage blog-detail-page">
        <div className="section-container not-found">
          <h2>Blog not found</h2>
          <a href="#/blogs" className="btn-primary">Back to Blogs</a>
        </div>
      </main>
    );
  }

  return (
    <main className="subpage blog-detail-page">
      {/* ───── Detail Hero / Banner ───── */}
      <section className="blog-detail-hero">
        <div className="section-container">
          <a href="#/blogs" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to all blogs
          </a>
          
          <div className="detail-header-content">
            <span className="blog-category-badge large">{blog.category}</span>
            <h1 className="detail-title">{blog.title}</h1>
            <div className="detail-meta">
              <div className="meta-author">
                <div className="author-avatar">{blog.author.charAt(0)}</div>
                <span>{blog.author}</span>
              </div>
              <span className="meta-dot">•</span>
              <span className="meta-date">{blog.date}</span>
              <span className="meta-dot">•</span>
              <span className="meta-read-time">5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Featured Image ───── */}
      <section className="detail-banner-image">
        <div className="section-container">
          <img src={blog.image} alt={blog.title} className="full-width-img" />
        </div>
      </section>

      {/* ───── Blog Content ───── */}
      <section className="blog-content-section">
        <div className="section-container content-container">
          <div className="blog-social-sidebar">
            <span>Share</span>
            <button className="social-btn"><i className="fab fa-twitter"></i></button>
            <button className="social-btn"><i className="fab fa-linkedin-in"></i></button>
            <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
            <button className="social-btn" onClick={() => navigator.clipboard.writeText(window.location.href)}>
              <i className="fas fa-link"></i>
            </button>
          </div>
          
          <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.content }}>
            {/* Content is injected here */}
          </div>
        </div>
      </section>

      {/* ───── Related Blogs ───── */}
      {relatedBlogs.length > 0 && (
        <section className="related-blogs-section">
          <div className="section-container">
            <h2 className="related-title">Read Next</h2>
            <div className="blog-grid related">
              {relatedBlogs.map(rb => (
                <div className="blog-card" key={rb.id}>
                  <div className="blog-card-image">
                    <img src={rb.image} alt={rb.title} />
                    <span className="blog-category-badge">{rb.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{rb.title}</h3>
                    <div className="blog-card-footer">
                      <span className="blog-meta">{rb.date}</span>
                      <a href={`#/blog-detail?id=${rb.id}`} className="read-more-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* ───── CTA Section ───── */}
      <section className="blog-cta-banner detail-cta">
        <div className="section-container">
          <div className="cta-content-wrapper">
            <h2>Inspired by this story?</h2>
            <p>Your actions can create a ripple effect of change. Join our community today.</p>
            <div className="cta-buttons">
              <a href="#/contact" className="btn-primary">Get Involved</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
