import React, { useState } from 'react';

const faqItems = [
  {
    question: 'What does Adore India do?',
    answer:
      'Adore India is a platform which provides opportunities to the youth to work for the betterment of society. It’s a voluntary pan-India network.',
  },
  {
    question: 'Where is Adore India’s administrative office?',
    answer:
      'The administrative office is in Kolkata. Our volunteers are in over 35 cities of India.',
  },
  {
    question: 'How to join Adore India?',
    answer:
      'To join our volunteering network, fill the inquiry form so that we can guide you step by step. The entire process of volunteer registration can take a fortnight or more which includes filling up a few forms and uploading some documents besides a few rounds of discussion',
  },
  {
    question: 'What are the volunteers required to do?',
    answer:
      'The volunteers form teams and participate in activities which build up the youth. The activities are mostly conducted in schools and localities through interactive sessions with students. Approaching schools and getting a positive response is a gradual process and requires patience and sincerity.',
  },
  {
    question: 'What is the location of work?',
    answer:
      'Volunteers are required to work in their respective towns or cities where they are studying or working. Local schools, orphanages, or informal community schools have to be selected for volunteering.',
  },
  {
    question: 'Will the volunteers be working all by themselves?',
    answer:
      'Volunteers can conduct activities by coordinating with the other existing volunteers in their city/town or team up with like-minded friends who are willing to work along.',
  },
];

const FaqsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.question) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, and question before submitting.' });
      return;
    }

    setStatus({ type: 'success', message: "Thanks for reaching out! We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', question: '' });

    window.setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <main className="subpage">
      <section className="faq-hero">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">FAQs</div>
            <h1 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="section-subtitle">
              Explore the most common questions about our programs, volunteering, and community activities. If your question is not listed,
              use the form below to ask us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-content">
        <div className="section-container">

          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <article key={item.question} className="faq-card">
                <button
                  type="button"
                  className={`faq-question ${activeIndex === index ? 'open' : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="faq-form-section">
            <div className="faq-form-card">
              <h3>Still have a question?</h3>
              <p>
                Submit your query below and our team will reply with the best options for your age, interests, and community goals.
              </p>

              <form className="faq-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Enter your full name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="you@example.com"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="question">Your Question *</label>
                  <textarea
                    id="question"
                    name="question"
                    value={formData.question}
                    placeholder="Tell us what you'd like to know"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-footer">
                  <button type="submit" className="btn-primary">
                    Send Question
                  </button>
                  <span className="form-footnote">Response typically within 24 hours.</span>
                </div>

                {status.message && (
                  <div className={status.type === 'error' ? 'faq-error' : 'faq-notice'}>{status.message}</div>
                )}
              </form>
            </div>

            <aside className="faq-support-card">
              <span className="support-tag">Need fast support?</span>
              <h4>We’re here to help with any detail.</h4>
              <p>
                Whether you want program recommendations, registration guidance, or team support, just send your question here and we’ll respond promptly.
              </p>
              <div className="support-list">
                <div>
                  <strong>Program matching</strong>
                  <p>We can recommend the right workshop or session for your goals.</p>
                </div>
                <div>
                  <strong>Volunteering details</strong>
                  <p>Learn how to join, contribute, and grow with ADORE.</p>
                </div>
                <div>
                  <strong>Custom sessions</strong>
                  <p>Ask for a tailored session for your school, family, or community group.</p>
                </div>
              </div>
              <p className="support-contact">
                Email us directly at <a href="mailto:info@adoreglobal.org">info@adoreglobal.org</a>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaqsPage;
