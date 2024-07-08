import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const NewHomePageFooter = () => {
  return (
    <footer class="footer" style={{backgroundColor:"#3e2780", marginTop:"50px",paddingTop:"30px",paddingBottom:"30px"}}>
    <section class="container">
      <div class="row" style={{flexDirection:'row'}}>
    
  <div class="col-lg-4 col-md-6">
     <ul class="footer-link" style={{display:"flex", listStyleType:"none"}} >
            <li class="footer-link_item" style={{padding:"20px"}}>
              <a class="footer-link_item" href="https://www.facebook.com/CreditHaat"><FontAwesomeIcon icon={faFacebook} size='3x'/> </a>
            </li>
            <li class="footer-link_item"  style={{padding:"20px"}}>
              <a class="footer-link_item" href="https://www.linkedin.com/company/credithaat/"><FontAwesomeIcon icon={faLinkedin} size='3x' /></a>
            </li>
          </ul>
  </div>
  <div class="col-lg-4 col-md-6">
            <ul class="footer-link" style={{listStyleType:"none"}}>
            <b style={{color:"white", fontSize:"20px"}}>Product</b>

            <li class="footer-link_item">
                <a class="footer-link_item"  href="/personal">Personal loan</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/business" >Business loan</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/credit">Credit card</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/upcoming">Upcoming products</a>
            </li>
          </ul>
        </div>
  <div class="col-lg-4 col-md-6">
          <ul class="footer-link" style={{listStyleType:"none",textDecoration:"none"}}>
          <b style={{color:"white", fontSize:"20px"}}>Resource</b>

            <li class="footer-link_item">
              <a class="footer-link_item" href="/faq">FAQs</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href='/lending' >Lending partners</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/acquisition" >Acquisition partners</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="/gro">Grievance Redressal Process</a>
            </li>
            <li class="footer-link_item">
              <a class="footer-link_item" href="score">Credit score</a>
            </li>
          </ul>
  </div>


 <style>
    {`
      
     .footer-link_item {
     color: #fff;
     }

    `}
    </style>   
          
      

 </div>
</section>
    
    
    <div class="copy-right container" style={{paddingLeft:"40px"}}>
      <div class="row" >
 
        <div class="col-sm" style={{color:"white"}}>All rights reserved
        </div>
        <div class="col-sm text-right">
          <a href="/terms" style={{color:"white" ,textDecoration:"none"}}>Terms of service</a>
        </div>
        <div class="col-sm text-right" >
          <a href="/privacy" style={{color:"white",textDecoration:"none"}}>Privacy policy</a>
        </div>
        <div class="col-sm text-right" >
          <a href="/support" style={{color:"white",textDecoration:"none"}}>Contact Us</a>
        </div>
      </div>
    </div>
  </footer>



  )
}

export default NewHomePageFooter;

