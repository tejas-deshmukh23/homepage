import React from "react";
import './PartnerList.css'; // Import CSS for styling
import incred from "../NewHomePage/NewHomePageImages/Incred 1.png";
import Prefr from "../NewHomePage/NewHomePageImages/prefr.png";
import iifl from "../NewHomePage/NewHomePageImages/finanace 1.png";
import FlexiLoan from "../NewHomePage/NewHomePageImages/loan-fl 1.png";
import indifi from "../NewHomePage/NewHomePageImages/INDI 1.png";

function PartnerList() {
    return (
        <div className="partner-list-container">
            <h5 className="partner-heading">45+ Partner lenders including</h5>
            <div className="lenders">
                <div className="brandcontainer">
                    <div className="brandboxes">
                        <img className="brand-img" src={incred} alt="Incred" />
                    </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={Prefr} alt="Prefr" />
                    </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={iifl} alt="IIFL" />
                    </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={FlexiLoan} alt="FlexiLoan" />
                     </div>

                    <div className="brandboxes">
                        <img className="brand-img" src={indifi} alt="Indifi" />
                    </div>
                </div>
            </div>
            <div className="view-all-container">
                <a href="#" className="view-all-link">View All</a>
            </div>
        </div>
    );
}

export default PartnerList;
