import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";


const Navbar = () => {
  
 const [open, setOpen] = useState(false)

 const openSideBar = () =>{
  setOpen(true)
 }

 const closeSideBar = () =>{
  setOpen(false)
 }

 
 // add fixed class to navbar
//  window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 80) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });
  
  return <>  
  {/* navbar */}
        <nav className="nav" id="nav">
          <div className="nav-center">
            {/* nav header */}
            <div className="nav-header">
              <img src="./images/logo.svg" className="nav-logo" alt="nav logo" />
              <button className="nav-btn" id="nav-btn" onClick={openSideBar}>
                <FaBars />
              </button>
            </div>
            {/* nav-links */}
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={closeSideBar}>home</Link>
              </li>
              <li>
                <Link to="about" onClick={closeSideBar}>about</Link>
              </li>
              <li>
                <Link to="projects" onClick={closeSideBar}>projects</Link>
              </li>
              <li>
                <Link to="contact" onClick={closeSideBar}>contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* end of navbar */}
        {/* sidebar */}
        <aside className={`${open ? 'sidebar show-sidebar' : 'sidebar' }`} id="sidebar">
          <div>
            <button className="close-btn" id="close-btn" onClick={closeSideBar}>
              <FaTimesCircle />
            </button>
            {/* nav-links */}
            <ul className="sidebar-links">
              <li>
               <Link to="/" onClick={closeSideBar}>home</Link>
              </li>
              <li>
               <Link to="about" onClick={closeSideBar}>about</Link>
              </li>
              <li>
               <Link to="projects" onClick={closeSideBar}>projects</Link>
              </li>
              <li>
                <Link to="contact" onClick={closeSideBar}>contact</Link>
              </li>
            </ul>
            {/* social icons */}
            <ul className="social-icons">
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-squarespace" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-behance" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="social-icon">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* end of sidebar */}
  
  </>
};

export default Navbar;
