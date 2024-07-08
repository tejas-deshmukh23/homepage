import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./NewIcons";
import credithattlogo from '../NewHomePage/NewHomePageImages/logo1-removebg-preview.png';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container" style={{fontFamily:'Open Sans, sans-serif'}}>
        <h4>CreditHaat</h4>
        <img className="nav-logo.icon" src={credithattlogo} alt="logo_pic" height={'40px'} width={'40px'} style={{marginLeft:'0px'}}/>
          <NavLink  className="nav-logo">
              
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} style={{color:'black'}}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={toggleDropdown}>
                Products
                {showDropdown && (
                  <ul className="dropdown-content" style={{listStyleType:'none'}}>
                    <li>
                      <NavLink to="/" activeClassName="active">
                        Personal Loan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" activeClassName="active">
                        Business Loan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" activeClassName="active">
                        Credit Cards
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}  style={{color:'black'}}
              >
              Contact Us
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;


// import React, {useState} from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";
// import { HamburgetMenuClose, HamburgetMenuOpen } from "./NewIcons";
// import credithattlogo from '../NewHomePage/NewHomePageImages/logo1-removebg-preview.png';

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container" style={{fontFamily:'Open Sans, sans-serif'}}>
//         <h4>CreditHaat</h4>
//         <img className="nav-logo.icon" src={credithattlogo} alt="logo_pic" height={'40px'} width={'40px'} style={{marginLeft:'0px'}}/>
//           <NavLink  className="nav-logo">
              
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to=""
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick} style={{color:'black'}}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <div className="nav-links" onClick={toggleDropdown}>
//                 Products
//                 {showDropdown && (
//                   <ul className="dropdown-content">
//                     <li>
//                       <NavLink to="" activeClassName="active">
//                         Personal Loan
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="" activeClassName="active">
//                         Business Loan
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="" activeClassName="active">
//                         Credit Card
//                       </NavLink>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to=""
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}  style={{color:'black'}}
//               >
//               Contact Us
//               </NavLink>
//             </li>
            
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuClose />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuOpen />
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;