import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/NewHomePage/HomePage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/NewHomePage/PrivacyPolicy';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
import ContactUs from './components/NewHomePage/ContactUs';
import TermsAndConditions from './components/NewHomePage/TermsAndConditions';
import GRO from './components/NewHomePage/GRO';
import Acquisition from './components/NewHomePage/Acquisition';
import Allpartner from './components/NewHomePage/AllPartners';
import EmiCalculator from './components/NewHomePage/EmiCalculator';
import CreditScoreForm from './components/NewHomePage/CreditScoreForm';
import TechnicalErrorPage from './components/NewHomePage/TechnicalErrorPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/termsC" element={<TermsAndConditions />} />
        <Route path="/gro" element={<GRO/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/Acq" element={<Acquisition/>} />
        <Route path="/Allpartners" element={<Allpartner/>}/>
        <Route path="/emic" element={<EmiCalculator/>}/>
        <Route path="/creditscore" element={<CreditScoreForm/>}/>
        <Route path='/technicalerror' element={<TechnicalErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
