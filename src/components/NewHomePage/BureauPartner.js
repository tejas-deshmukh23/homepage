// BureauPartner.js

import React from 'react';
import './BureauPartner.css'; // Import CSS file for styling
import exe from "../../images/experian1.png";

const BureauPartner = () => {
    return (
        <div className="bureau-partner">
            <h2 className="bureau-heading">Bureau Partner</h2>
            <div className="logo-container-b">
                <img src={exe} alt="Bureau Partner Logo" className="bureau-logo" />
            </div>
        </div>
    );
}

export default BureauPartner;
