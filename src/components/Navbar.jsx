import React from "react";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center px-10 py-4 text-white font-poppins">
    
    <h1 className="text-3xl md:text-4xl font-bold tracking-wide">VENCE</h1>

   
    <ul className="ml-auto flex space-x-6 text-[20px] leading-[25px] font-normal text-[#F8F9FA] opacity-50">
        <li className="hover:opacity-100 cursor-pointer">Home</li>
        <li className="hover:opacity-100 cursor-pointer">Inspiration</li>
        <li className="hover:opacity-100 cursor-pointer">Courses</li>
        <li className="hover:opacity-100 cursor-pointer">Blog</li>
      </ul>
    
      <button
        className="w-[36px] h-[25px] bg-[#F8F9FA80] opacity-50 hover:opacity-100 text-white text-[12px] font-normal leading-[25px] ml-6 flex items-center justify-center rounded-md"
        style={{ textDecorationSkipInk: "none", textUnderlinePosition: "from-font" }}
      >
        🔍
      </button>
  </nav>
  );
};

export default NavBar;
