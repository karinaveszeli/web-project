import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-24 md:py-36 px-4 md:px-24">
      <div className="w-[80%] mx-auto grid grid-rows-[auto,auto,auto] gap-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold">
            VENCE Studio<span className="text-[#c8a876]">.</span>
          </h2>

          <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition duration-200">About Studio</a>
            <a href="#" className="hover:text-white transition duration-200">Archive</a>
            <a href="#" className="hover:text-white transition duration-200">Contact Us</a>
          </div>

          <div className="flex justify-center md:justify-end space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition duration-200">Fb</a>
            <a href="#" className="hover:text-white transition duration-200">Tw</a>
            <a href="#" className="hover:text-white transition duration-200">Ln</a>
          </div>
        </div>

      
        <div className="border-t border-[#E5E5E5] opacity-20 w-full"></div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-sm text-center md:text-left">
          <p>1088, North Street, Alexandria, AU</p>
          <p className="md:text-right">© 2022, All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
