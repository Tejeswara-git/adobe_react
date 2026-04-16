import React from 'react';

const bookList = [
  {
    id: '320-Days-of-Doing-Nothing',
    src: '/images/book_320_Days_of_Doing_Nothing.png',
    title: '320 Days of Doing Nothing',
    author: 'By ADORE Collective',
    summary:
      'A reflective journal chronicling the journey of ADORE’s volunteers, sharing stories of impact, lessons learned, and the transformative power of community service.',
  },
  {
    id: 'book-of-knowledge',
    src: '/images/Book_of_knowledge.png',
    title: 'Book of Knowledge',
    author: 'By ADORE Volunteers',
    summary:
      'A collection of stories, insights, and practical tools from ADORE’s volunteers, designed to inspire and guide new volunteers in making a meaningful impact in their communities.',
  },
  {
    id: 'Pearls-of-Joy',
    src: '/images/Book_Pearls_of_Joy.png',
    title: 'Pearls of Joy',
    author: 'By ADORE Mentors',
    summary:
      'A compilation of inspiring stories and reflections from ADORE’s mentors, sharing their experiences, wisdom, and the joy of guiding young leaders in their community service journeys.',
  },
  {
    id: 'Wings-of-Joy',
    src: '/images/Book_Wings_of_Joy.png',
    title: 'Wings of Joy',
    author: 'By ADORE Mentors',
    summary:
      'A heartfelt collection of stories and insights from ADORE’s mentors, celebrating the transformative power of mentorship and the joy of nurturing young leaders in their community service endeavors.',
  },
  
];

const BooksPage = () => {
  return (
    <main className="subpage books-page">
      <section className="subpage-hero">
        <div className="section-container subpage-grid">
          <div className="subpage-copy">
            <div className="section-tag">Books</div>
            <h1 className="section-title">
              Explore the <span className="gradient-text">ADORE Books</span>
            </h1>
            <p className="section-subtitle">
              Dive into our published stories, guides, and reflections built to inspire youth leadership, community service,
              and positive transformation.
            </p>
            <div className="books-hero-highlights">
              <span className="subpage-highlight">Trusted by volunteers</span>
              <span className="subpage-highlight">Practical youth tools</span>
              <span className="subpage-highlight">Real community stories</span>
            </div>
            <div className="button-group">
              <a href="#/about" className="btn-primary">
                Explore More
              </a>
              <a href="#home" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
          <div className="subpage-visual">
            <img src="/images/adobe1.jpg" alt="ADORE books collection" className="subpage-image" />
          </div>
        </div>
      </section>

      <section className="books-section">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Featured Releases</div>
            <h2 className="section-title">Our Latest Publications</h2>
            <p className="section-subtitle">
              Each book is crafted to support learners and volunteers with ideas, planning tools, and inspiring stories
              from ADORE’s community work.
            </p>
          </div>

          <div className="books-grid">
            {bookList.map((book) => (
              <article key={book.id} className="book-card">
                <div className="book-info">
                  <div className="book-meta">{book.author}</div>
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-summary">{book.summary}</p>
                  <div className="book-actions">
                    <a href="#/about" className="btn-primary">
                      Explore More
                    </a>
                  </div>
                </div>
                <div className="book-cover-container">
                  <img src={book.src} alt={`${book.title} cover`} className="book-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BooksPage;
