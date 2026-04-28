import React, { useState } from 'react';
import { blogsData, blogCategories } from '../../data/blogsData';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter logic
  const filteredBlogs = blogsData.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Separate featured from the rest
  const featuredBlog = activeCategory === "All" && searchQuery === "" 
    ? blogsData.find(b => b.featured) 
    : null;
    
  // If we have a featured blog, exclude it from the grid
  const gridBlogs = featuredBlog 
    ? filteredBlogs.filter(b => b.id !== featuredBlog.id)
    : filteredBlogs;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <main className="subpage blogs-page">
      {/* ───── Hero Header ───── */}
      <section className="blog-hero">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Releases</div>
            <h1 className="section-title">
              Our <span className="gradient-text">Blogs</span>
            </h1>
            <p className="section-subtitle">
              Insights, impact stories, and resources dedicated to youth growth and social awareness.
              Stay updated with our latest initiatives and learning modules.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Search & Filters ───── */}
      <section className="blog-controls">
        <div className="section-container">
          <div className="controls-wrapper">
            <div className="blog-filters">
              {blogCategories.map(cat => (
                <button 
                  key={cat} 
                  className={`aw-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(4); }}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="blog-search">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                placeholder="Search blogs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Featured Blog ───── */}
      {featuredBlog && (
        <section className="blog-featured-section">
          <div className="section-container">
            <div className="blog-featured-card">
              <div className="featured-image-wrapper">
                <img src={featuredBlog.image} alt={featuredBlog.title} />
                <span className="blog-category-badge">{featuredBlog.category}</span>
              </div>
              <div className="featured-content">
                <span className="blog-meta">{featuredBlog.date} • By {featuredBlog.author}</span>
                <h2 className="featured-title">{featuredBlog.title}</h2>
                <p className="featured-summary">{featuredBlog.summary}</p>
                <a href={`#/blog-detail?id=${featuredBlog.id}`} className="btn-primary">
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───── Blog Grid ───── */}
      <section className="blog-grid-section">
        <div className="section-container">
          {gridBlogs.length > 0 ? (
            <div className="blog-grid">
              {gridBlogs.slice(0, visibleCount).map(blog => (
                <div className="blog-card" key={blog.id}>
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} />
                    <span className="blog-category-badge">{blog.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-meta">{blog.date}</span>
                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-card-summary">{blog.summary}</p>
                    <div className="blog-card-footer">
                      <span className="blog-author">{blog.author}</span>
                      <a href={`#/blog-detail?id=${blog.id}`} className="read-more-link">
                        Read More <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No blogs found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}

          {visibleCount < gridBlogs.length && (
            <div className="load-more-container">
              <button className="btn-secondary" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="blog-cta-banner">
        <div className="section-container">
          <div className="cta-content-wrapper">
            <h2>Want to make a difference?</h2>
            <p>Join our volunteer network or participate in our upcoming programs to start your journey of impact.</p>
            <div className="cta-buttons">
              <a href="#/active-volunteer" className="btn-primary">Join as Volunteer</a>
              <a href="#/programs" className="btn-secondary" style={{color: '#0ea5e9'}}>Explore Programs</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
