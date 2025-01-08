import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm border-b-[1px] border-gray-200">
      <div className="container mx-auto px-4 py-2.5 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* 桌面端 */}
        <div className="hidden sm:flex space-x-10 font-bold">
          <Link to="/" className="text-gray-700 hover:text-red-500 text-lg cursor-pointer">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-500 text-lg cursor-pointer">About Us</Link>
          <Link to="/product" className="text-gray-700 hover:text-red-500 text-lg cursor-pointer">Product</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-500 text-lg cursor-pointer">Contact</Link>
        </div>

        <div className="hidden sm:block cursor-pointer text-gray-700 hover:text-red-500">
          English
        </div>

        {/* 移动端菜单按钮 */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-red-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单（展开时显示） */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-700 hover:text-red-500 text-lg">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 text-lg">About Us</Link>
            <Link to="/product" className="text-gray-700 hover:text-red-500 text-lg">Product</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-500 text-lg">Contact</Link>
            <div className="cursor-pointer text-gray-700 hover:text-red-500 text-sm">
              English
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;