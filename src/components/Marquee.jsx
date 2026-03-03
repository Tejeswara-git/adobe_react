import React from 'react';

const Marquee = () => {
    return (
        <div className="marquee-section">
            <div className="marquee-track">
                <div className="marquee-content">
                    {Array(2).fill(['💡 Share Ideas', '🌟 Inspire Youth', '🚀 Launch Dreams', '🤝 Build Community', '🌍 Change the World', '🎓 Learn Together']).flat().map((item, i) => (
                        <React.Fragment key={i}>
                            <span>{item}</span>
                            <span className="dot">•</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
