import React from "react";
import logo from '../assets/full_logo.png'; // Adjust the path to your logo image
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate = useNavigate();

  const sendToHome  = () => {
    navigate('/');
  };


  return (
    <header className=" shadow-lg px-12">
      <div className="container mx-auto flex justify-between items-end">
        {/* Left Navigation */}
        <nav className="space-x-10 mb-10 font-roboto font-bold">
          <a href="#" className="text-gray-800 hover:text-yellow-500">MENY</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500">BESTÄLL</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500">VÅR MAT</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500" >NYHETER</a>
        </nav>

        {/* Logo */}
        <div>
          <img src={logo} onClick={sendToHome} alt="BTHDonalds Logo" className="h-32 cursor-pointer" />
        </div>

        {/* Right Navigation */}
        <nav className="space-x-10 mb-10 font-roboto font-bold">
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">HITTA OSS</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">JOBB</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">ANSVAR</a>
          <a href="#" className="text-gray-800 hover:text-yellow-500 ">OM OSS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
