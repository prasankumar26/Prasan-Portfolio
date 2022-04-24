import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return  <>
  {/* footer */}
        <footer className="footer">
          {/* social icons */}
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/Developers-Bangalore-109196318175533/" target="_blank" className="social-icon">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/prasankumar26" target="_blank" className="social-icon">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/programmersbangalore/" target="_blank" className="social-icon">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://github.com/prasankumar26" target="_blank" className="social-icon">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prasan-kumar-choudhary-141a3916b/" target="_blank" className="social-icon">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <p>© {new Date().getFullYear()} Prasan Kumar. all rights reserved</p>
        </footer>
</>
};

export default Footer;
