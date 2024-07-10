import React from 'react';
import './SecondLast.css'; // Import CSS file for styling
import image1 from './NewHomePageImages/newploanimageone.png';

const NewPersonalLoanProduct = () => {
  return (
    <div className="personalcontainer">
      <div className="ploan-left-side">
        <div className="ploan-text">
          <h2>Left Side Content</h2>
          <p>This is the text on the left side.</p>
        </div>
        <div className="ploan-image-container">
          <img src={image1} alt="Image" className="ploan-image" />
        </div>
      </div>
      <div className="ploan-right-side">
        <div className="ploan-form-container">
          <input type="text" placeholder="Mobile Number" className="ploan-text-field" />
          <input type="text" placeholder="First Name" className="ploan-text-field" />
          <input type="text" placeholder="Last Name" className="ploan-text-field" />
          <button className="ploan-send-otp">Send OTP</button>
        </div>
      </div>
    </div>
  );
};

export default NewPersonalLoanProduct;
