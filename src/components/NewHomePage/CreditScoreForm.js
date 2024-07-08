// CreditScorePage.js

import React, { useState } from 'react';
import './CreditScoreForm.css'; // Import CSS file for styling
import creditscoreimage from '../NewHomePage/NewHomePageImages/creditscoreimage.png';
import otppageimage from '../NewHomePage/NewHomePageImages/otppageimage.png';
import VectorBar from './VectorBar';
import BureauPartner from './BureauPartner';
import NavBar from './NavBar';
import NewHomePageFooter from './NewHomePageFooter';
import NewCityFooter from './newCityFooter';
import { styled } from '@mui/material/styles'; // Import styled component from Material-UI
import Dialog from '@mui/material/Dialog'; // Import Material-UI components
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Define styled component using Material-UI's styled
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const CreditScore = () => {
    // State variables using React hooks
    const [open, setOpen] = React.useState(false); // State for dialog open/close
    const [otp, setOtp] = useState(''); // State for OTP input
    const [otpStatus, setOtpStatus] = useState(''); // State for OTP verification status
    const [firstName, setFirstName] = useState(''); // State for first name input
    const [lastName, setLastName] = useState(''); // State for last name input
    const [mobileNumber, setMobileNumber] = useState(''); // State for mobile number input
    const [email, setEmail] = useState(''); // State for email input
    const [pan, setPan] = useState(''); // State for PAN input
    const faqData = [
        { question: 'What is a Credit Score?', answer: 'A credit score is a numerical representation of your creditworthiness, typically ranging from 300 to 850. It is calculated based on your credit history, including your borrowing, repayment behaviors, and other financial activities. Lenders use credit scores to evaluate the risk of lending money to you. A higher credit score indicates a lower risk, which can result in better loan terms and interest rates.' },
        { question: 'Why Checking Your Credit Report is Important ?', answer: 'You can contact customer support...' },
        { question: 'How is a credit score calculated?', answer: 'Yes, we offer discounts...' },
        { question: 'How can I improve my credit score?', answer: 'To change your password...' }
    ];

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse if clicked again
        } else {
            setExpandedIndex(index); // Expand clicked FAQ
        }
    };

     // Function to handle opening of OTP dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing of OTP dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Dummy function to simulate OTP sending logic
  const handleSendOTP = () => {
    console.log('Send OTP button clicked');
    setOpen(true); // Open the OTP dialog
  };

  // Function to handle OTP input change
  const handleChange = (e) => {
    const { value } = e.target;
    // Validate if the input is numeric and has a maximum length of 6 characters
    if (/^[0-9]*$/.test(value) && value.length <= 6) {
      setOtp(value);
    }
  };

  // Function to handle OTP form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp);
    // Dummy OTP verification logic
    if (otp === '123456') {
      setOtpStatus('OTP Verified successfully!');
    } else {
      setOtpStatus('Invalid OTP. Please try again.');
    }
  };

  // JSX structure of the CreditScoreForm component

    return (
        <>
            <NavBar />
            <section>
                <div className="container-c">
                    <div className="left-side">
                        <h2>Credit Score</h2>
                        <p>Get Free Credit Score Report</p>
                        <form className="form1" action="#">
                        <div className="input-group">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              id="pan"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="PAN number"
            />
            </div>
                            <div className="checkbox-group">
                                <input type="checkbox" id="agreeTerms" required />
                                <label htmlFor="agreeTerms" className="conditions">
                                    I agree to the terms and conditions lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae justo arcu. Curabitur semper orci sed nunc pulvinar, id posuere nunc ultricies. Proin et lacinia lorem. Mauris nec metus sit amet risus vulputate tempor. Donec eleifend dolor id commodo vestibulum. Sed bibendum justo nec lorem sollicitudin, ut aliquet orci consequat. Nam vestibulum nunc sed ligula tincidunt ultrices. Vivamus dignissim lacinia felis, id tincidunt felis consequat sit amet. Ut interdum magna eget nisi fringilla, eu iaculis risus rutrum. Integer consequat massa non nisi aliquam, vitae congue lorem consequat.
                                </label>
                            </div>
                            <div className="button-container">
                            <button className="send-otp-button" onClick={handleSendOTP}>Send OTP</button>                                
                            </div>
                        </form>
                    </div>
                    <div className="right-side">
                        <img src={creditscoreimage} alt="Credit Score" className="image" />
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <div className="faq-container1">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item1">
                        <div className="faq-question1" onClick={() => handleToggle(index)}>
                            <span>{faq.question}</span>
                            <span className={`arrow ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
                        </div>
                        {expandedIndex === index && (
                            <div className="faq-answer1">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
             {/* Bootstrap Dialog for OTP Input */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <img
            src={otppageimage}
            alt="OTP Page Image"
            style={{ marginBottom: '20px', maxWidth: '50%'}}
          />
          <h2>Fill OTP</h2>
          <h4 className="terms-text">
            Please enter the 6 digit code sent to your mobile number for
            verification.
          </h4>
          {/* OTP form */}
          <form className="otp-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={handleChange}
              className="otp-input"
              maxLength="6"
              placeholder="Enter OTP"
            />
            <p className="otp-status">{otpStatus}</p>
            <button type="submit" className="verify-button">
              Verify
            </button>
          </form>
        </DialogContent>
      </BootstrapDialog>

            
            <VectorBar />
            <BureauPartner />
            <NewHomePageFooter />
            <NewCityFooter />
        </>
    );
}

export default CreditScore;
