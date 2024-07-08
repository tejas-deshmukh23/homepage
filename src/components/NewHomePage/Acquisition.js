import React from 'react';
import './Acquisition.css'; // Import your CSS file
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';
import AcqImage from '../NewHomePage/NewHomePageImages/acqimage.png';
import IndiaLogo from '../NewHomePage/NewHomePageImages/indiaLogo.png';

const Acquisition = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="acq-container">
                <div className="logo-sect">
                    <img src={IndiaLogo} alt="India1 Logo" />
                    <h2>Acquisition <br /> partner</h2>
                    <p>We are proud to partner with India1, a leader in CreditHaat. With a commitment to excellence and a track record of success, India1 brings unparalleled expertise and innovative solutions to our collaborative efforts. Together, we aim to drive growth, enhance customer satisfaction, and achieve new milestones in our journey.</p>
                </div>
                <div className="acq-image-sect">
                    <img src={AcqImage} alt="Acquisition Image" />
                </div>
            </div>
            <NewHomePageFooter />
            <NewCityFooter />
        </>
    );
}

export default Acquisition;
