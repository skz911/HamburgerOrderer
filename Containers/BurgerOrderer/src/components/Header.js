import React from "react";

const Header = () => {
  return (
    <header className="bg-yellow-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Navigation */}
        <nav className="space-x-4">
          <a href="#" className="text-gray-800 hover:underline">MENY</a>
          <a href="#" className="text-gray-800 hover:underline">BESTÄLL</a>
          <a href="#" className="text-gray-800 hover:underline">VÅR MAT</a>
          <a href="#" className="text-gray-800 hover:underline">NYHETER</a>
        </nav>

        {/* Logo */}
        <div>
          <img src="/path-to-logo" alt="BTHDonalds Logo" className="h-16" />
        </div>

        {/* Right Navigation */}
        <nav className="space-x-4">
          <a href="#" className="text-gray-800 hover:underline">HITTA OSS</a>
          <a href="#" className="text-gray-800 hover:underline">JOBB</a>
          <a href="#" className="text-gray-800 hover:underline">ANSVAR</a>
          <a href="#" className="text-gray-800 hover:underline">OM OSS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
