// // import React from 'react';
// // import './HomePage.css';
// // import NavBar from './NavBar';

// // const HomePage = () => (
// //   <><NavBar/>
// //     <h1>Welcome to Home Page</h1>
// //     <p>This is the content of the home page.</p>
// //   </>
// // );

// // export default HomePage;

// import { useState, useEffect } from 'react';
// import './HomePage.css'; // Assuming you have a CSS file for styling
// // import firstimg from '../NewHomePageImages/Firstone';
// import firstimg from '../NewHomePage/NewHomePageImages/undraw_wishes_icyp.png';
// import secondimg from '../NewHomePage/NewHomePageImages/undraw_Dreamer_re_9tua.png';
// import NewNavBar from '../NewHomePage/NavBar';
// import thirdimg from '../NewHomePage/NewHomePageImages/undraw_Meeting_re_i53h.png';
// import  fourthimg from'../NewHomePage/NewHomePageImages/undraw_Online_payments_re_y8f2.png';
// import fifthimg from '../NewHomePage/NewHomePageImages/undraw_fast_loading_re_8oi3 (1).png';
// import sixthimg from '../NewHomePage/NewHomePageImages/girlmobile.png';
// import NewHKeyPartners from './NewHKeyPartners';
// import CustomerReview from './CustomerReview';
// import Partnerlist from '../NewHomePage/PartnerList';
// import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
// import NewCityFooter from './newCityFooter';
// import ciieimage from './NewHomePageImages/ciieimage.png';
// //import { BiFontFamily } from 'react-icons/bi';



// //reviews
// function HomePage() {
//     const [activeReviewIndex, setActiveReviewIndex] = useState(0); // State to track active review index

//     const [showAnswer1, setShowAnswer1] = useState(false);
//   const [showAnswer2, setShowAnswer2] = useState(false);
//   const [showAnswer3, setShowAnswer3] = useState(false);

//   // Toggle function for each FAQ
//   const toggleAnswer1 = () => {
//       setShowAnswer1(!showAnswer1);
//   };

//   const toggleAnswer2 = () => {
//       setShowAnswer2(!showAnswer2);
//   };

//   const toggleAnswer3 = () => {
//       setShowAnswer3(!showAnswer3);
//   };
//     // Toggle function for pagination dots
//     const handleDotClick = (index) => {
//       setActiveReviewIndex(index);
//     };
  
//     // Customer reviews data
//     const customerReviews = [
//       {
//         id: 1,
//         messageBefore: "100% Commited To Customer Satisfaction",
//         message:"CreditHaat’s simple application process helped me find the best loan offer. In addition, their helpful loan executives helped me complete the loan application in no time.",
//         name: "Ekta",
//         image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Ekta.jpeg",
//       },
//       {
//         id: 2,
//         messageBefore: "100% Commited To Customer Satisfaction",
//         message:
//           "Applying for a loan from CreditHaat is so easy and hasslefree. The platform helped me avail a loan of ₹5 Lacs within 4 hours!",
//         name: "Deepak",
//         image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Deepak.jpeg",
//       },
//       {
//         id: 3,
//         messageBefore: "100% Commited To Customer Satisfaction",
//         message:
//           "I needed funds to deal with an emergency. With CreditHaat I received money in my account within minutes.",
//         name: "Santosh",
//         image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Santosh.jpeg",

       
//       },
//     ];
//     // Auto-swapping logic for reviews
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
//     }, 4000); // Change review every 5 seconds

//     return () => clearInterval(interval);
//   }, []);




//     return (
//       <>
//     <div className='Nav-Bar'>
//     <NewNavBar/>
//     </div>
//         <section className="container banner">
//             <div className="row">
//                 <div className="col-md-6 py-md-5 px-md-5"style={{fontFamily:'Open Sans, sans-serif'}}>
//                     <div className="text1" style={{fontSize:"40px", color:"#3e2780"}}>
//                         {/* Text content here */}
//                        {/* <h1 style={{color:"black", fontWeight:"bold"}}>CreditHaat</h1>*/}
//                         <p>Explore Our Range of Flexible Loans</p>
//                         <p className='textabout' style={{fontSize:"30px", color:"black" , fontWeight:"normal"}}>Looking for a loan? CreditHaat offers you the best loan deals with flexible terms and competitive interest rates.</p>
//                     </div>
//                 </div>
//                 <div className="col-md-6" >
//                     <div className="image">
//                         {/* Image goes here */}
//                         <img src={firstimg} className="img-fluid banner_img" alt="Your Alt Text" />
//                     </div>
//                 </div>
//             </div>

//             <div className="row mt-5">
//                 <div className="col-md-6 py-md-5 px-md-5" style={{fontFamily:'Open Sans, sans-serif'}}>
//                     <div className="text3">
//                         <h1 style={{color:"black", fontWeight:"bold"}}>Your Ideal Personal Loan Awaits</h1>
//                         <p>Find the lowest rates through our extensive network of banks and NBFCs.</p>
//                         <div>
//                            <button type="submit" className="btn" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
//                         </div>
//                     </div>
//             </div>
//                 <div className="col-md-6">
//                     <div className="image">
//                         <img src={secondimg} className="img-fluid banner_img" alt="Second Image" />
//                     </div>
//                 </div>
//             </div>


//             {/* Third row (new content) */}
//             <div className="row mt-5">
//                 <div className="col-md-6 py-md-5 px-md-5" >
//                 <div className="image">
//                         <img src={thirdimg} className="img-fluid banner_img" alt="Third Image" />
//                     </div> 
//                 </div>
//                 <div className="col-md-6" style={{fontFamily:'Open Sans, sans-serif'}}>
                    
//                     <div className="text" >
//                         <h1 style={{color:"black", fontWeight:"bold" , paddingTop:"50px"}}>Business Loans Made Easy</h1>
//                         <p>Secure competitive interest rates through our partnerships with leading financial institutions. </p>
//                         <div>
//                            <button type="submit" className="btn" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

            
//             {/* forth row */}

//             <div className="row mt-5">
//                 <div className="col-md-6 py-md-5 px-md-5" style={{fontFamily:'Open Sans, sans-serif'}}>
//                     <div className="text">
//                         <h1 style={{fontWeight:"bold"}}>Unlock the Best Credit Card Deals</h1>
//                         <p>Partner with us to discover credit cards offering the best rewards, low interest rates, and exclusive perks.</p>
//                         <div>
//                            <button type="submit" className="btn" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="image">
//                         <img src={fourthimg} className="img-fluid banner_img" alt="Second Image" />
//                     </div>
//                 </div>
//             </div>

//  {/* fifth row (new content) */}
//  <div className="row mt-5">
//                 <div className="col-md-6 py-md-5 px-md-5">
//                 <div className="image">
//                         <img src={fifthimg} className="img-fluid banner_img" alt="Third Image" />
//                     </div> 
//                 </div>
//                 <div className="col-md-6" style={{fontFamily:'Open Sans, sans-serif'}}>
                    
//                     <div className="text2">
//                         <h1 style={{color:"black",fontWeight:"bold"}}>Check Your Credit Score Instantly</h1>
//                         <p>Get your credit score for free in just a few clicks.</p>
//                         <div>
//                            <button type="submit" className="btn" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </section>
//             <section className="container banner"> 
// {/* key partners */}

// <NewHKeyPartners/>
// <br></br>
//             <div className='ciie'>
//             <h2 style={{fontWeight:"bold", alignContent:'center',fontFamily:'Open Sans, sans-serif'}}>Supported By</h2>
// <img src={ciieimage} className="ciie-imagec" alt="ciie image" />
// </div>


// {/* sixth image */}

// <div className="row mt-5">
// <div class="row text-center">
//       <div class="benefits-home" style={{marginBottom:'30px',fontFamily:'Open Sans, sans-serif'}}>
//          <h2 style={{fontWeight:"bold"}}>Simple Online Process</h2>
//       </div>
//       </div>
//                 <div className="col-md-6 py-md-5 px-md-5" style={{fontFamily:'Open Sans, sans-serif'}}>
//                     <div className="textf">
//                         <h3 style={{color:"#3e2780"}}><span className="number"> 1 </span> CHECK YOUR RATES</h3>
//                         <p>It is a long established fact that a reader will be distracted by the readable content</p>
//                     </div>
//                     <div className="texts">
//                         <h3 style={{color:"#3e2780"}}><span className="number"> 2 </span> APPROVAL IN MINUTES</h3>
//                         <p>It is a long established fact that a reader will be distracted by the readable content</p>
//                     </div>
//                     <div className="textf">
//                         <h3 style={{color:"#3e2780"}}><span className="number"> 3 </span> FUNDS AS SOON AS 1 DAY</h3>
//                         <p>It is a long established fact that a reader will be distracted by the readable content</p>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="image">
//                         <img src={sixthimg} className="img-fluid banner_img" alt="Second Image" />
//                     </div>
//                 </div>
//             </div>
     
          


//             {/* CSS for responsiveness */}
//             <style>
//             {`
//           .customer-reviews-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust as needed */
//             gap: 20px;
//             margin-top: 20px;
           
//           }
            
//           .review-item {
//             display: none;
//           }

//           .review-item.active {
//             display: block;
//           }

       
//             .text2{
//              padding: 70px; 
//               fontSize: 30px;
    
//   }

//           .pagination-dots {
//             margin-top: 20px;
//           }

//           .dot {
//             width: 10px;
//             height: 10px;
//             border-radius: 50%;
//             display: inline-block;
//             margin: 0 5px;
//             cursor: pointer;
//             background-color: #ccc;
//           }

//           .dot.active {
//             background-color: #3e2780;
//           }

//           @media (max-width: 768px) {
//             .customer-reviews-grid {
//               grid-template-columns: 1fr; /* Single column for mobile */

//             }
//     .text1 p {
//     font-size: 30px;
//     text-align: left;
    
//   }
//               .text p {
//     font-size: 30px;
//     text-align: left;
    
//   }

//   .text2 p{
//       font-size: 30px;
//       text-align: left;
//   }

  
//   .text2 {
//               padding: 0; /* Remove padding for mobile */
//             }
    

          
//         `}
//       </style>
//         </section>

        
//                               {/* review message */}


//  {/* Customer Reviews */}
//  <section className="customer-reviews">
//         <div className="customer-reviews-grid">
//           {customerReviews.map((review, index) => (
//             <div className={`review-item ${activeReviewIndex === index ? 'active' : ''}`} key={review.id}>
//               <CustomerReview
//                 messageBefore={review.messageBefore}
//                 message={review.message}
//                 name={review.name}
//                 image={review.image}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Pagination Dots */}
//       <div className="pagination-dots mt-5 text-center">
//         {customerReviews.map((review, index) => (
//           <span
//             key={review.id}
//             className={`dot ${activeReviewIndex === index ? 'active' : ''}`}
//             onClick={() => setActiveReviewIndex(index)}
//           ></span>
//         ))}
//       </div>

    




//             {/* Frequently Asked Questions */}
//             <div className="row mt-5" style={{fontFamily:'Open Sans, sans-serif'}}>
//                 <div className="col-md-12">
//                     <h3 className="heading">Frequently Asked Questions</h3>
//                 </div>
//                 <div className="col-md-12">
//                     <div className="faq">
//                         <div className="faq-question" onClick={toggleAnswer1}>
//                             <h4>Will taking a loan from CreditHaat be costly?</h4>
//                             <span className={`dropdown-arrow ${showAnswer1 ? 'open' : ''}`}>&#9660;</span>
//                         </div>
//                         {showAnswer1 && (
//                             <p>CreditHaat has tied up with the best lenders in India. CreditHaat ensures that users find the best loan offer for themselves.</p>
//                         )}
//                     </div>
//                     <div className="faq">
//                         <div className="faq-question" onClick={toggleAnswer2}>
//                             <h4>Does CreditHaat charge any fees from users?</h4>
//                             <span className={`dropdown-arrow ${showAnswer2 ? 'open' : ''}`}>&#9660;</span>
//                         </div>
//                         {showAnswer2 && (
//                             <p>No CreditHaat does not charge any fees from its users.</p>
//                         )}
//                     </div>
//                     <div className="faq">
//                         <div className="faq-question" onClick={toggleAnswer3}>
//                             <h4>Is sharing personal information safe?</h4>
//                             <span className={`dropdown-arrow ${showAnswer3 ? 'open' : ''}`}>&#9660;</span>
//                         </div>
//                         {showAnswer3 && (
//                             <p>Yes, CreditHaat uses the best encryption and security mechanisms to protect user information.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <Partnerlist/>
//         <NewHomeFooter/>
//         <NewCityFooter/>
//         </>
//     );
// }

// export default HomePage;



// import React from 'react';
// import './HomePage.css';
// import NavBar from './NavBar';

// const HomePage = () => (
//   <><NavBar/>
//     <h1>Welcome to Home Page</h1>
//     <p>This is the content of the home page.</p>
//   </>
// );

// export default HomePage;

// import React from 'react';
// import './HomePage.css';
// import NavBar from './NavBar';

// const HomePage = () => (
//   <><NavBar/>
//     <h1>Welcome to Home Page</h1>
//     <p>This is the content of the home page.</p>
//   </>
// );

// export default HomePage;

import { useState, useEffect } from 'react';
import './HomePage.css'; // Assuming you have a CSS file for styling
// import firstimg from '../NewHomePageImages/Firstone';
import firstimg from '../NewHomePage/NewHomePageImages/undraw_wishes_icyp.png';
import secondimg from '../NewHomePage/NewHomePageImages/undraw_Dreamer_re_9tua.png';
import NewNavBar from '../NewHomePage/NavBar';
import thirdimg from '../NewHomePage/NewHomePageImages/undraw_Meeting_re_i53h.png';
import  fourthimg from'../NewHomePage/NewHomePageImages/undraw_Online_payments_re_y8f2.png';
import fifthimg from '../NewHomePage/NewHomePageImages/undraw_fast_loading_re_8oi3 (1).png';
import sixthimg from '../NewHomePage/NewHomePageImages/girlmobile.png';
import NewHKeyPartners from './NewHKeyPartners';
import CustomerReview from './CustomerReview';
import Partnerlist from '../NewHomePage/PartnerList';
import NewHomeFooter from '../NewHomePage/NewHomePageFooter';
import NewCityFooter from './newCityFooter';
import SupportPartner from './SupportPartner';

//import { BiFontFamily } from 'react-icons/bi';



//reviews
function HomePage() {
    const [activeReviewIndex, setActiveReviewIndex] = useState(0); // State to track active review index

    const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  // Toggle function for each FAQ
  const toggleAnswer1 = () => {
      setShowAnswer1(!showAnswer1);
  };

  const toggleAnswer2 = () => {
      setShowAnswer2(!showAnswer2);
  };

  const toggleAnswer3 = () => {
      setShowAnswer3(!showAnswer3);
  };
    // Toggle function for pagination dots
    const handleDotClick = (index) => {
      setActiveReviewIndex(index);
    };
  
    // Customer reviews data
    const customerReviews = [
      {
        id: 1,
        messageBefore: "100% Commited To Customer Satisfaction",
        message:"CreditHaat’s simple application process helped me find the best loan offer. In addition, their helpful loan executives helped me complete the loan application in no time.",
        name: "Ekta",
        image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Ekta.jpeg",
      },
      {
        id: 2,
        messageBefore: "100% Commited To Customer Satisfaction",
        message:
          "Applying for a loan from CreditHaat is so easy and hasslefree. The platform helped me avail a loan of ₹5 Lacs within 4 hours!",
        name: "Deepak",
        image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Deepak.jpeg",
      },
      {
        id: 3,
        messageBefore: "100% Commited To Customer Satisfaction",
        message:
          "I needed funds to deal with an emergency. With CreditHaat I received money in my account within minutes.",
        name: "Santosh",
        image: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Santosh.jpeg",

       
      },
    ];
    // Auto-swapping logic for reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIndex((prevIndex) => (prevIndex + 1) % customerReviews.length);
    }, 4000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, []);




    return (
      <div className="main-home-page" style={{padding:"0"}}>
    <div className='Nav-Bar'>
    <NewNavBar/>
    </div>
        <section className="container banner">
            <div className="row">
                <div className="col-md-6 py-md-5 px-md-5"style={{fontFamily:'Open Sans, sans-serif'}}>
                    <div className="text1" style={{ fontWeight:"bold"}}>
                        {/* Text content here */}
                       {/* <h1 style={{color:"black", fontWeight:"bold"}}>CreditHaat</h1>*/}
                        <p>Explore Our Range of Flexible Loans</p>
                        <p className='textabout' style={{fontSize:"30px", color:"black" , fontWeight:"normal"}}>Looking for a loan? CreditHaat offers you the best loan deals with flexible terms and competitive interest rates.</p>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="image">
                        {/* Image goes here */}
                        <img src={firstimg} className="img-fluid banner_img" alt="Your Alt Text" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 py-md-5 px-md-5" style={{fontFamily:'Open Sans, sans-serif'}}>
                    <div className="text3">
                        <h1 style={{color:"black", fontWeight:"bold"}}>Your Ideal Personal Loan Awaits</h1>
                        <p>Find the lowest rates through our extensive network of banks and NBFCs.</p>
                        <div>
                           <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
                        </div>
                    </div>
            </div>
                <div className="col-md-6">
                    <div className="image">
                        <img src={secondimg} className="img-fluid banner_img" alt="Second Image" />
                    </div>
                </div>
            </div>


            {/* Third row (new content) */}
            <div className="row mt-5">
            <div className="col-md-6 order-md-1 order-2">
                <div className="image">
                        <img src={thirdimg} className="img-fluid banner_img" alt="Third Image" />
                    </div> 
                </div>
                <div className="col-md-6 order-md-2 order-1 py-md-5 px-md-5"  style={{fontFamily:'Open Sans, sans-serif'}}>
                    
                    <div className="text" >
                        <h1 style={{color:"black", fontWeight:"bold" , paddingTop:"50px"}}>Business Loans Made Easy</h1>
                        <p>Secure competitive interest rates through our partnerships with leading financial institutions. </p>
                        <div>
                           <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            
            {/* forth row */}

            <div className="row mt-5">
                <div className="col-md-6 py-md-5 px-md-5" style={{fontFamily:'Open Sans, sans-serif'}}>
                    <div className="text">
                        <h1 style={{fontWeight:"bold"}}>Unlock the Best Credit Card Deals</h1>
                        <p>Partner with us to discover credit cards offering the best rewards, low interest rates, and exclusive perks.</p>
                        <div>
                           <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image">
                        <img src={fourthimg} className="img-fluid banner_img" alt="Second Image" />
                    </div>
                </div>
            </div>

 {/* fifth row (new content) */}
 <div className="row mt-5">
 <div className="col-md-6 order-md-1 order-2">
                <div className="image">
                        <img src={fifthimg} className="img-fluid banner_img" alt="Third Image" />
                    </div> 
                </div>
                <div className="col-md-6 order-md-2 order-1 py-md-5 px-md-5"  style={{fontFamily:'Open Sans, sans-serif'}}>
                    
                    <div className="text2">
                        <h1 style={{color:"black",fontWeight:"bold"}}>Check Your Credit Score Instantly</h1>
                        <p>Get your credit score for free in just a few clicks.</p>
                        <div>
                           <button type="submit" className="btn1" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "10px" }}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
{/* key partners */}
</section>

<NewHKeyPartners/>
<SupportPartner/>


{/* sixth image */}
<section className="container banner">

<div className="row mt-5">
<div class="row text-center">
      <div class="benefits-home" style={{marginBottom:'30px',fontFamily:'Open Sans, sans-serif'}}>
         <h2 style={{fontWeight:"bold"}}>Simple Online Process</h2>
      </div>
      </div>
                <div className="col-md-6 py-md-5 px-md-5" style={{fontFamily:'Open Sans, sans-serif'}}>
                    <div className="textf">
                        <h3 style={{color:"#3e2780"}}><span className="number"> 1 </span> CHECK YOUR RATES</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    </div>
                    <div className="texts">
                        <h3 style={{color:"#3e2780"}}><span className="number"> 2 </span> APPROVAL IN MINUTES</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    </div>
                    <div className="textf">
                        <h3 style={{color:"#3e2780"}}><span className="number"> 3 </span> FUNDS AS SOON AS 1 DAY</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image">
                        <img src={sixthimg} className="img-fluid banner_img" alt="Second Image" />
                    </div>
                </div>
            </div>
     
          


            {/* CSS for responsiveness */}
            <style>
            {`
          .customer-reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust as needed */
            gap: 20px;
            margin-top: 20px;
           
          }
            .text1 p {
    font-size: 40px;
    text-align: left;
    
  }
              .text p {
   font-size: 30px;
    text-align: left;
    
  }

  .text2 p{
      font-size: 30px;
      text-align: left;
  }
      .text3 p{
      font-size: 30px;
      text-align: left;
  }
          .review-item {
            display: none;
          }

          .review-item.active {
            display: block;
          }

       
            .text2{
             padding: 70px; 
              fontSize: 30px;
    
  }

          .pagination-dots {
            margin-top: 20px;
          }

          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin: 0 5px;
            cursor: pointer;
            background-color: #ccc;
          }

          .dot.active {
            background-color: #3e2780;
          }

          @media (max-width: 768px) {
            .customer-reviews-grid {
              grid-template-columns: 1fr; /* Single column for mobile */

            }
    .text1 p {
    font-size: 25px;
    text-align: left;
    
  }
              .text p {
   font-size: 25px;
    text-align: left;
    
  }

  .text2 p{
      font-size: 25px;
      text-align: left;
  }
      .text3 p{
      font-size: 25px;
      text-align: left;
  }
 .textabout {
      display: none; /* Hide the element on mobile devices */
    }
  
  .text2 {
              padding: 0; /* Remove padding for mobile */
            }
    

          
        `}
      </style>
        </section>

        
                              {/* review message */}


 {/* Customer Reviews */}
 <section className="customer-reviews">
        <div className="customer-reviews-grid">
          {customerReviews.map((review, index) => (
            <div className={`review-item ${activeReviewIndex === index ? 'active' : ''}`} key={review.id}>
              <CustomerReview
                messageBefore={review.messageBefore}
                message={review.message}
                name={review.name}
                image={review.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="pagination-dots mt-5 text-center">
        {customerReviews.map((review, index) => (
          <span
            key={review.id}
            className={`dot ${activeReviewIndex === index ? 'active' : ''}`}
            onClick={() => setActiveReviewIndex(index)}
          ></span>
        ))}
      </div>

    




            {/* Frequently Asked Questions */}
            <div className="row mt-5" style={{fontFamily:'Open Sans, sans-serif'}}>
                <div className="col-md-12">
                    <h3 className="heading">Frequently Asked Questions</h3>
                </div>
                <div className="col-md-12">
                    <div className="faq">
                        <div className="faq-question" onClick={toggleAnswer1}>
                            <h4>Will taking a loan from CreditHaat be costly?</h4>
                            <span className={`dropdown-arrow ${showAnswer1 ? 'open' : ''}`}>&#9660;</span>
                        </div>
                        {showAnswer1 && (
                            <p>CreditHaat has tied up with the best lenders in India. CreditHaat ensures that users find the best loan offer for themselves.</p>
                        )}
                    </div>
                    <div className="faq">
                        <div className="faq-question" onClick={toggleAnswer2}>
                            <h4>Does CreditHaat charge any fees from users?</h4>
                            <span className={`dropdown-arrow ${showAnswer2 ? 'open' : ''}`}>&#9660;</span>
                        </div>
                        {showAnswer2 && (
                            <p>No CreditHaat does not charge any fees from its users.</p>
                        )}
                    </div>
                    <div className="faq">
                        <div className="faq-question" onClick={toggleAnswer3}>
                            <h4>Is sharing personal information safe?</h4>
                            <span className={`dropdown-arrow ${showAnswer3 ? 'open' : ''}`}>&#9660;</span>
                        </div>
                        {showAnswer3 && (
                            <p>Yes, CreditHaat uses the best encryption and security mechanisms to protect user information.</p>
                        )}
                    </div>
                </div>
            </div>

            <Partnerlist/>
            <div>
            <NewHomeFooter/>
            <NewCityFooter/>
            </div>
        
        </div>
    );
}

export default HomePage;



