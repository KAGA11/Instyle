import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white flex justify-between items-center px-5 py-2.5">
      {/* 左侧：Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* 中间：导航链接 */}
      <div className="flex space-x-10 font-bold absolute left-1/2 transform -translate-x-1/2">
        <a href="#" className="text-gray-700 hover:text-red-500 text-lg">Home</a>
        <a href="#" className="text-gray-700 hover:text-red-500 text-lg">About Us</a>
        <a href="#" className="text-gray-700 hover:text-red-500 text-lg">Product</a>
        <a href="#" className="text-gray-700 hover:text-red-500 text-lg">Contact</a>
      </div>

      {/* 右侧：语言切换 */}
      <div className="cursor-pointer text-gray-700 hover:text-red-500">
        English
      </div>
    </header>
  );
};

export default Header;