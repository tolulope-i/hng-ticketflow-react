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
                <Link to="https://www.linkedin.com/in/tolulope-ilesanmi?" target="_blank"><FaLinkedinIn /></Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/tolu__nimi?igsh=MXN6M29yeXJhN3Z3Ng==" target="_blank"><FaInstagram /></Link>
              </li>
              <li>
                <Link to="https://x.com/dev__tolu?t=Y-q7l2pvY5032cfCsZp2mA&s=08" target="_blank"><FaXTwitter /></Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/marvelous.ilesanmi.9" target="_blank"><FaFacebookF /></Link>
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