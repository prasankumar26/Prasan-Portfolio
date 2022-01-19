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
              <a href="https://www.twitter.com" className="social-icon">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <p>© {new Date().getFullYear()} john doe. all rights reserved</p>
        </footer>
</>
};

export default Footer;
