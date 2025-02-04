import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-20 md:py-28 px-6 md:px-16">
      <div className="w-[80%] mx-auto grid grid-rows-[auto,auto,auto] gap-6">

      
        <div className="grid grid-cols-3 gap-6 items-center">
          <h2 className="text-lg font-bold">VENCE Studio<span className="text-[#c8a876]">.</span></h2>

          <div className="flex justify-center space-x-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition duration-200">About Studio</a>
            <a href="#" className="hover:text-white transition duration-200">Archive</a>
            <a href="#" className="hover:text-white transition duration-200">Contact Us</a>
          </div>

          <div className="flex justify-end space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition duration-200">Fb</a>
            <a href="#" className="hover:text-white transition duration-200">Tw</a>
            <a href="#" className="hover:text-white transition duration-200">Ln</a>
          </div>
        </div>

       
        <div className="border-t border-[#E5E5E5] opacity-20 w-full"></div>

       
        <div className="grid grid-cols-2 gap-6 text-gray-400 text-sm">
          <p>1088, North Street, Alexandria, AU</p>
          <p className="text-right">© 2022, All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
