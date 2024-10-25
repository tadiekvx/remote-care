import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 md:mb-0 text-green">CareConnect</h2>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
            <Link to="/about" className="text-green border-b-2 border-transparent hover:border-green transition-all duration-300">About Us</Link>
            <Link to="/contact" className="text-green border-b-2 border-transparent hover:border-green transition-all duration-300">Contact</Link>
            <Link to="/faq" className="text-green border-b-2 border-transparent hover:border-green transition-all duration-300">FAQ</Link>
            <Link to="/terms" className="text-green border-b-2 border-transparent hover:border-green transition-all duration-300">Terms of Service</Link>
            <Link to="/privacy" className="text-green border-b-2 border-transparent hover:border-green transition-all duration-300">Privacy Policy</Link>
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" aria-label="Facebook" className="text-nude hover:text-green">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="text-nude hover:text-green">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="text-nude hover:text-green">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-nude hover:text-green">
            <FaLinkedin />
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-green">
          <p>&copy; {new Date().getFullYear()} CareConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
