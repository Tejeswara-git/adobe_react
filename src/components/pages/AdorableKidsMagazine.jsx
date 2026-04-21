import React, { useMemo, useState, useEffect } from 'react';

const magazineIssues = [
  {
    magazine: 'Adorable Kids Magazine',
    month: 'April',
    year: '2022',
    title: 'The Pride Lands Of Africa',
    subtitle: 'Explore the beauty and diversity of Africa through the eyes of young adventurers.',
    image: '/images/ADORABLE MAGAZINE 7TH EDITION-1.png',
  },
  {
    magazine: 'Adorable Kids Magazine',
    month: 'February',
    year: '2022',
    title: 'Shades Of Shinchan',
    subtitle: 'Dive into the colorful world of Shinchan with fun stories, activities, and creative inspiration for kids.',
    image: '/images/Adorable-Feb 2022-1.png',
  },
  {
    magazine: 'Adorable Kids Magazine',
    month: 'March',
    year: '2022',
    title: 'Tales Of Tom and Jerry',
    subtitle: 'Join Tom and Jerry in their hilarious adventures with stories, games, and creative activities for young readers.',
    image: '/images/Adorable-March 2022-1.png',
  },
  {
    magazine: 'Adorable Kids Magazine',
    month: 'January',
    year: '2022',
    title: 'Doeremons World',
    subtitle: 'Step into the imaginative world of Doeremon with fun stories, activities, and creative inspiration for kids.',
    image: '/images/4th AdORable_ Kids Magazine-1.png',
  },
];

const uniqueMagazines = Array.from(new Set(magazineIssues.map((item) => item.magazine)));

const AdorableKidsMagazine = () => {
  const initialMagazine = uniqueMagazines[0];
  const initialFiltered = magazineIssues.filter(issue => issue.magazine === initialMagazine);
  const initialMonths = Array.from(new Set(initialFiltered.map(issue => issue.month)));
  const initialYears = Array.from(new Set(initialFiltered.map(issue => issue.year)));

  const [selectedMagazine, setSelectedMagazine] = useState(initialMagazine);
  const [selectedMonth, setSelectedMonth] = useState(initialMonths[0]);
  const [selectedYear, setSelectedYear] = useState(initialYears[0]);

  const filteredIssues = useMemo(() => magazineIssues.filter(issue => issue.magazine === selectedMagazine), [selectedMagazine]);
  const filteredMonths = useMemo(() => Array.from(new Set(filteredIssues.map(issue => issue.month))), [filteredIssues]);
  const filteredYears = useMemo(() => Array.from(new Set(filteredIssues.map(issue => issue.year))), [filteredIssues]);

  useEffect(() => {
    if (filteredMonths.length > 0 && !filteredMonths.includes(selectedMonth)) {
      setSelectedMonth(filteredMonths[0]);
    }
    if (filteredYears.length > 0 && !filteredYears.includes(selectedYear)) {
      setSelectedYear(filteredYears[0]);
    }
  }, [selectedMagazine, filteredMonths, filteredYears]);

  const currentIssue = useMemo(() =>
    magazineIssues.find(issue =>
      issue.magazine === selectedMagazine &&
      issue.month === selectedMonth &&
      issue.year === selectedYear
    ) || magazineIssues[0],
    [selectedMagazine, selectedMonth, selectedYear]
  );

  return (
    <main className="subpage adorable-magazine-page">
      <section className="magazine-intro">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Adorable Kids Magazine</div>
            <h2 className="section-title">Monthly Magazine for Young Readers</h2>
            <p className="section-subtitle">
              A delightful monthly publication featuring stories, activities, and inspiration for kids, published regularly to spark creativity and learning.
            </p>
          </div>

          <div className="magazine-selectors">
            <label className="select-wrapper">
              <span>Magazine</span>
              <select value={selectedMagazine} onChange={(e) => setSelectedMagazine(e.target.value)}>
                {uniqueMagazines.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>

            <label className="select-wrapper">
              <span>Month</span>
              <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                {filteredMonths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>

            <label className="select-wrapper">
              <span>Year</span>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                {filteredYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="magazine-hero">
        <div className="section-container magazine-hero-grid">
          <div className="magazine-copy">
            <div className="section-tag">Adorable Kids Magazine</div>
            <h1 className="section-title">{currentIssue.title}</h1>
            <p className="section-subtitle">
              {currentIssue.subtitle} Every month a new magazine gets published; choose your month, year, and magazine edition to preview.
            </p>

            <div className="magazine-meta">
              <div className="magazine-card">
                <span>Magazine</span>
                <strong>{currentIssue.magazine}</strong>
              </div>
              <div className="magazine-card">
                <span>Month</span>
                <strong>{currentIssue.month}</strong>
              </div>
              <div className="magazine-card">
                <span>Year</span>
                <strong>{currentIssue.year}</strong>
              </div>
            </div>

            <div className="magazine-actions">
              <a href="#" className="btn-primary">
                Read More
              </a>
              <a href="#" className="btn-secondary">
                Download Issue
              </a>
            </div>
          </div>

          <div className="magazine-visual">
            <div className="magazine-shell">
              <div className="magazine-frame">
                <img src={currentIssue.image} alt={`${currentIssue.title} cover`} className="magazine-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdorableKidsMagazine;
