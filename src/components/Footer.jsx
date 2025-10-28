import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section socials quick-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/auth/login">Login</Link>
              </li>
              <li>
                <Link to="/auth/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section socials">
            <ul>
              <li>
                <Link to=""><FaLinkedinIn /></Link>
              </li>
              <li>
                <Link to=""><FaInstagram /></Link>
              </li>
              <li>
                <Link to=""><FaXTwitter /></Link>
              </li>
              <li>
                <Link to=""><FaFacebookF /></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TicketFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;