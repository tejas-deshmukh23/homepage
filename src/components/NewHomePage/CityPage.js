import React from "react";
import './CityPage.css';

const CityPage = () => {
  return (
    <div className="firstcomp">
      <h3>Eligibility Criteria</h3>
      <div className="citynumbers">
        <div className="number-container">
          <p><span className="numberc">1</span>Above 21 years of age</p>
        </div>
        <div className="number-container">
        <p><span className="numberc">2</span>Minimum monthly income - ₹12,000</p>
        </div>
        <div className="number-container">
        <p><span className="numberc">3</span>Resident of India</p>
        </div>
        <div className="number-container">
        <p><span className="numberc">4</span>Interest rate starting from 10.99% p.a.</p>
        </div>
      </div>
    </div>
  );
}

export default CityPage;
