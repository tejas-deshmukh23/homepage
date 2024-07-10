import React, { useState } from 'react';
import './CityPages.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import NewNavBar from '../NewHomePage/NavBar';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import creditscoreimages from './NewHomePageImages/bangloreimage.png'; // Import your city image
import StepIndicator from './StepIndicator';
import CityPageInfo from './CityPageInfo';
import Partnerlist from '../NewHomePage/PartnerList';
import SecondLast from './SecondLast';
import CityPage from './CityPage';
import MoreInformation from './MoreInformation';


const CityPages = () => {
    const faqData = [
        { question: 'Will taking a loan from credithaat be costly?', answer: 'CreditHaat has tied up with the best lenders in India. CreditHaat ensures that users find the best loan offer for themselves.' },
        { question: 'Does CreditHaat Charge any fees from users ?', answer: 'No, CreditHaat does not charge any fees from its users.' },
        { question: 'Is sharing Personal information is safe ?', answer: 'Yes, CreditHaat uses the best encryption and security mechanisms to protect user information.' },
        { question: 'Will CreditHaat team help in completing loan application ?', answer: 'CreditHaat’s experienced loan executives will provide users all the help to complete the loan application.' }, 
    ];
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if clicked again
        } else {
            setExpandedIndex(index); // Expand clicked FAQ
        }
    };
  return (
    <>
      <div className="Nav-Bar">
        <NewNavBar />
      </div>
      <section className="city-sect">
      <div className="city-page-container">
        <div className="city-text-section">
          <h1>Getting a Personal Loan in .....</h1>
          <p>Apply for Personal Loan up to ₹10 Lakhs in ......</p>
          <p>Salaried | Self employed | Business</p>
          <button className="apply-button-city">Apply Personal Loan</button>
          <div className="safe-secure">
            <FontAwesomeIcon icon={faShieldAlt} /> Safe secure and protected
          </div>
        </div>
        <div className="city-image-section">
          <img
            src={creditscoreimages} // Replace with your city image path
            alt="City Image"
          />
        </div>
      </div>
      <div className="content-of-city">
        <h2>CreditHaat -Your quick path to personal loans in.....</h2>
      </div>
      <CityPageInfo/>
      <StepIndicator/>
      
       {/* FAQ Section */}
       <div className="faq-container2">
        <h2>FAQs</h2>
        <p>We aim to solve your credit needs - simple and hassle-free. CreditHaat is a one-stop shop for all your credit needs</p>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item2">
                        <div className="faq-question2" onClick={() => handleToggle(index)}>
                            <span>{faq.question}</span>
                            <span className={`arrowsone ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer2">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <CityPage/>
            <MoreInformation/>
            <SecondLast/>
            <Partnerlist/>
      </section>
      <NewHomeFooter />
    </>
  );
};

export default CityPages;
