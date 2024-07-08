
import React from "react";
import  './NewHKeyPartners.css';
import experian from "../NewHomePage/NewHomePageImages/experianimagen.png";
import aws from "../../images/png-transparent-aws-hd-logo-thumbnail-removebg-preview (1).png";

function NewHKeyPartners(){
    return (
        // <footer style={{backgroundColor:"#F2EDFF80",marginTop:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
        <>
        
    <h2 style={{ marginTop : '15px', fontWeight:"bold" ,textAlign :' center', fontFamily:'Open Sans, sans-serif', fontSize : 'calc(1.325rem + 0.9vw)'}}>Key partners</h2>
    <div className="gridContainer">
          {/* Grid items (columns) */}
          {/* <div className={styles.gridItem}>All rights reserved</div> */}
          <div className="gridItem">
          <div><img className="NewKeyPartnersImg1" src={experian} style={{ background: "none", border: "none" }}/></div>
        </div>
        <div className="gridItem">
          <div><img className="NewKeyPartnersImg2" src={aws} /></div>
        </div>
          <div className="gridItem">
            <div ><i class=""><img className="NewKeyPartnersImg" src="data:image/png;base64,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"/></i></div>
          </div>
          <div className="gridItem">
        
           <div><i class=""><img className="NewKeyPartnersImg" src="data:image/png;base64,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"/></i></div>
         </div>
         
        </div>
        
        
        
        </>
        
      );
    };

export default NewHKeyPartners;