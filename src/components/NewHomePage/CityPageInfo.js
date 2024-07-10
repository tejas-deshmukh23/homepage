import React, { useState, useRef } from 'react';
import './CityPageInfo.css'; // Import your CSS file for styling

const CityPageInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const scrollLeft = containerRef.current.clientWidth * index;
      containerRef.current.scrollLeft = scrollLeft;
    }
  };

  const infoItems = [
    {
      title: 'Flexible Loan Amount',
      description: 'Choose any loan amount of upto ₹10 lakhs',
    },
    {
      title: 'Quick Eligibility Check',
      description: "CreditHaat's 2-minute eligibility check: Quick and hassle-free.",
    },
    {
      title: 'Collateral Free Loans',
      description: 'No guarantor or collateral needed for CreditHaat personal loans.',
    },
    {
      title: 'Affordable Interest Rates',
      description: 'Avail loans at affordable rates starting at just 1.33% per month',
    },
  ];

  // Handle scrolling and updating active dot on scroll
  const handleScroll = () => {
    const scrollPosition = containerRef.current.scrollLeft;
    const index = Math.round(scrollPosition / containerRef.current.clientWidth);
    setActiveIndex(index);
  };

  return (
    <div className="city-info">
      <div className="info-container" ref={containerRef} onScroll={handleScroll}>
        {infoItems.map((item, index) => (
          <div key={index} className="info-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="dots">
        {infoItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CityPageInfo;
