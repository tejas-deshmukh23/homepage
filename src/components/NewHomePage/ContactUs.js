import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling
import contactimg from '../NewHomePage/NewHomePageImages/contactus.png';
import whatsappIcon from '../NewHomePage/NewHomePageImages/whatsapp-iconn.png';
import callIcon from '../NewHomePage/NewHomePageImages/call-iconn.png';
import emailIcon from '../NewHomePage/NewHomePageImages/email-iconn.png';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';


const ContactUs = () => {
  return (
    <>
    <div className="contact-us-container">
      <div className="image-container">
        {/* Image goes here */}
        <img src={contactimg} alt="Contact" />
      </div>
      <div className="form-container">
        <form>
          <h2>Can we help you?</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" name="mobile" />
          </div>
          <div className="form-group">
            <label htmlFor="query">Select Query:</label>
            <select id="query" name="query">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <div style={{textAlign:'center'}}>
          <button type="submit">Submit</button>
          </div>
          
        </form>
      </div>
      </div>
      <div className="support-options-container" style={{boxSizing:'content-box'}}>
      <div className="support-option">
            <div className='icon-wrapper'>
              <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" style={{paddingBottom:'20px',height:'120px', width:'120px'}}/>
          </div>
          </div>
        <div className="support-option">
        <div class="icon-wrapper">
          <img src={callIcon} alt="Call" className="icon" style={{height:'80px', width:'70px',paddingTop:'20px',justifyContent:'center'}}/>
          </div>
        </div>
        <div className="support-option">
        <div class="icon-wrapper">
          <img src={emailIcon} alt="Email" className="icon" style={{height:'80px', width:'70px',paddingTop:'20px'}}/>
          </div>
        </div>
      </div>
      <NewHomeFooter/>
        <NewCityFooter/>

      {/* CSS for responsiveness */}
      <style>
      {`
          .support-options-container {
            display: flex;
           
          }

          @media (max-width: 768px) {
           
            .support-option {
              margin: 10px 0; /* Adjust vertical spacing between icons */
            }
          }
        `}
      </style>
        
  
   </>
  );
};

export default ContactUs;
