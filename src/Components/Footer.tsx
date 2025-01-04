import React from 'react';
import { Divider } from 'antd';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4 flex justify-between">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-300 mt-2">Address: 123-456-7890, 123-456-7890</p>
          <p className="text-gray-300 mt-1">Phone: 123-456-7890, 123-456-7890</p>
          <Divider className='border-gray-900'/>
          <div className=" text-gray-400">
            &copy; {new Date().getFullYear()} FashionCraft. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;