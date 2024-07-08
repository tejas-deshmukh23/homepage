
import React from "react";
import  './SupportPartner.css';
import support from "../NewHomePage/NewHomePageImages/ciieimage.png";

function SupportPartner(){
    return (
        // <footer style={{backgroundColor:"#F2EDFF80",marginTop:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
        <>
        
    <h2 style={{ marginTop : '15px', fontWeight:"bold" ,textAlign :' center', fontFamily:'Open Sans, sans-serif', fontSize : 'calc(1.325rem + 0.9vw)'}}>Supported By</h2>
    <div className="gridContainer-s">
          {/* Grid items (columns) */}
          {/* <div className={styles.gridItem}>All rights reserved</div> */}
          <div className="gridItem-s">
          <div><img className="support-partner-img" src={support} /></div>
        </div>

         
         
        </div>
        
        
        
        </>
        
      );
    };

export default SupportPartner;