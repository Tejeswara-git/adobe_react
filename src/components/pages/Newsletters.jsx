import React, { useState } from 'react';

const Newsletters = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const newsletters = [
    {
      id: 1,
      month: 'January',
      year: 2024,
      title: 'Empowering Communities',
      pdfUrl: '/path/to/newsletter1.pdf', // Replace with actual path
    },
    {
      id: 2,
      month: 'February',
      year: 2024,
      title: 'Innovation in Education',
      pdfUrl: '/path/to/newsletter2.pdf',
    },
    {
      id: 3,
      month: 'March',
      year: 2024,
      title: 'Sustainable Development',
      pdfUrl: '/path/to/newsletter3.pdf',
    },
    {
      id: 4,
      month: 'April',
      year: 2024,
      title: 'Community Impact',
      pdfUrl: '/path/to/newsletter4.pdf',
    },
    {
      id: 5,
      month: 'May',
      year: 2024,
      title: 'Leadership Development',
      pdfUrl: '/path/to/newsletter5.pdf',
    },
    // Add more newsletters as needed
  ];

  const handlePdfClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };

  return (
    <div className="newsletters-page">
      <section className="section-container">
        <div className="section-header">
          <span className="section-tag">Newsletters</span>
          <h1 className="section-title">Stay Updated with Our Latest Newsletters</h1>
          <p className="section-subtitle">
            Explore our monthly newsletters featuring stories, updates, and insights from our community.
          </p>
        </div>
        <div className="newsletters-grid">
          {newsletters.map((newsletter) => (
            <div key={newsletter.id} className="newsletter-card">
              <div className="newsletter-header">
                <span className="newsletter-month">{newsletter.month}</span>
                <span className="newsletter-year">{newsletter.year}</span>
              </div>
              <h3 className="newsletter-title">{newsletter.title}</h3>
              <button
                className="btn-primary"
                onClick={() => handlePdfClick(newsletter.pdfUrl)}
              >
                View PDF
              </button>
            </div>
          ))}
        </div>
        {selectedPdf && (
          <div className="pdf-viewer">
            <button className="close-pdf" onClick={() => setSelectedPdf(null)}>
              Close PDF
            </button>
            <embed src={selectedPdf} type="application/pdf" width="100%" height="600px" />
          </div>
        )}
      </section>
    </div>
  );
};

export default Newsletters;