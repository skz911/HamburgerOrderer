import React, { useState } from "react";
import logo from '../../public/assets/full_logo.png'; // Adjust the path to your logo image
import { useNavigate } from 'react-router-dom';

/**
 * @module LayoutComponents
 */


/**
 * Header component that displays the navigation bar and the logo.
 * 
 * @component
 * @memberof module:LayoutComponents
 * @returns {JSX.Element} The rendered header component.
 */

const Header = () => {

  /**
   * State to control the visibility of the mobile menu.
   * @type {boolean}
   */
  const [isOpen, setIsOpen] = useState(false); 

  const navigate = useNavigate();

  /**
  * Function to navigate the user to the home page.
  */
  const sendToHome = () => {
    navigate('/');
  };

   /**
   * Toggles the mobile menu visibility by changing the `isOpen` state.
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="shadow-lg px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        
      <nav className="hidden lg:flex space-x-10 font-roboto font-bold">
          <a href="#" className="text-gray-800 hover:text-yellow-500">MENY</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500">BESTÄLL</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500">VÅR MAT</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500">NYHETER</a>
        </nav>

        <div>
          <img src={logo} onClick={sendToHome} alt="BTHDonalds Logo" className="h-32 cursor-pointer" />
        </div>

        
        <nav className="hidden lg:flex space-x-10 font-roboto font-bold">
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">HITTA OSS</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">JOBB</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">ANSVAR</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">OM OSS</a>
        </nav>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-yellow-500 focus:outline-none">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden absolute top-32 left-0 w-full bg-white shadow-lg py-4 space-y-4 text-center font-roboto font-bold">
            <a href="#" className="block text-gray-800 hover:text-yellow-500">MENY</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">BESTÄLL</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">VÅR MAT</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">NYHETER</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">HITTA OSS</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">JOBB</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">ANSVAR</a>
            <a href="#" className="block text-gray-800 hover:text-yellow-500">OM OSS</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
