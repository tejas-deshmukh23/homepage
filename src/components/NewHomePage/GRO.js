import React from 'react';
import './GRO.css'; // Import your CSS file
import groimg from "../NewHomePage/NewHomePageImages/groimg.png";
import NavBar from './NavBar';
import NewCityFooter from './newCityFooter';
import NewHomePageFooter from './NewHomePageFooter';

const Gro = () => {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="gro-container">
                <div className="text-content-gro">
                    <h2>GRIEVANCE REDRESSAL PROCESS OF <span style={{ color: "#3e2780" }}>CreditHaat</span></h2>
                </div>
                <div className="image-section">
                    <img src={groimg} alt="gro Image" />
                </div>
            </div>
            <div className='text-part-gro'>
                <div className="content-of-gro">
                    <p>We aim to delight our customers and work hard to make sure that we help our customers avail the best credit solutions from our vast network of lending partners. However we understand that even with our best efforts we may get it wrong some times. If you have a complaint or would like us to address any concerns please reach out to us at support@credithaat.com or send a letter to -</p>
                </div>
                <div className="content-of-gro">
                    <h2>VIBHUPRADA SERVICES PRIVATE LIMITED</h2>
                    <p>Office No.  6 to 12, 7th Floor, Tower B,<br />Downtown City Vista, Survey Number 58/2,<br />Fountain Road,<br />Kharadi Pune MH 411014 IN.</p>
                </div>
                <div className="content-of-gro">
                    <h2>Escalation process:</h2>
                    <p>If your query/complaint has not been addressed within 7 working days; please reach out to our Grievance Redressal Officer as provided below -</p>
                </div>
                <div className="content-of-gro1">
                    <h2>Grievance Redressal Officer : <span>Monika Kaushik</span></h2>
                </div>
                <div className="content-of-gro1">
                    <h2>Tel : <span>020-4125-7718</span></h2>
                </div>
                <div className="content-of-gro1">
                    <h2>Designation : <span>GRO</span></h2>
                </div>
                <div className="content-of-gro1">
                    <h2>Office address : <span>HO</span></h2>
                </div>
            </div>
            <NewHomePageFooter />
            <NewCityFooter />
        </>
    );
}

export default Gro;
