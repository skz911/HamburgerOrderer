/**
 * @module LayoutComponents
 */

import React from "react";

/**
 * Footer component that displays navigation links and social media icons.
 * 
 * The footer contains two main sections:
 * 1. Navigation links to different pages (Home, About Us, Contact, Privacy Policy).
 * 2. Social media links (Facebook, Twitter, Instagram) with respective icons.
 * 
 * Additionally, the footer displays the current year and a copyright message.
 * 
 * @component
 * @memberof module:LayoutComponents
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Navigation Links */}
          <div className="mb-4 md:mb-0">
            <nav className="space-x-4">
              <a href="/" className="hover:text-yellow-400">Home</a>
              <a href="/about" className="hover:text-yellow-400">About Us</a>
              <a href="/contact" className="hover:text-yellow-400">Contact</a>
              <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
            </nav>
          </div>

          {/* Right Side: Social Media and Contact */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook-icon.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/twitter-icon.png" alt="Twitter" className="h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram-icon.png" alt="Instagram" className="h-6" />
            </a>
          </div>
        </div>

        {/* Copyright and Additional Info */}
        <div className="text-center mt-4">
          <p className="text-gray-400">© {new Date().getFullYear()} BTHDonalds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
