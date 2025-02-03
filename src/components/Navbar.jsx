import React from "react";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center px-10 py-4 text-white font-poppins z-50">

      
     
      <h1 className="absolute text-white font-poppins font-bold text-[30px] leading-[25px] w-[65px] h-[25px] top-[36px] left-[100px]">
        VENCE
        <span className="text-[#c8a876]">.</span> 
      </h1>

     
      <ul className="ml-auto flex space-x-6 text-[20px] leading-[25px] font-normal text-[#F8F9FA] opacity-70">
        <li>
          <a href="/" className="px-3 py-1 rounded-md hover:bg-[#ffffff22] hover:opacity-200 transition duration-200">
            Home
          </a>
        </li>
        <li>
          <a href="/inspiration" className="px-3 py-1 rounded-md hover:bg-[#ffffff22] hover:opacity-200 transition duration-200">
            Inspiration
          </a>
        </li>
        <li>
          <a href="/courses" className="px-3 py-1 rounded-md hover:bg-[#ffffff40] hover:opacity-200 transition duration-200">
            Courses
          </a>
        </li>
        <li>
          <a href="/blog" className="px-3 py-1 rounded-md hover:bg-[#ffffff22] hover:opacity-200 transition duration-200">
            Blog
          </a>
        </li>
      </ul>

   
      <button
        className="w-[36px] h-[25px] bg-[#F8F9FA80] opacity-50 hover:opacity-100 text-white text-[12px] font-normal leading-[25px] ml-6 flex items-center justify-center rounded-md transition-opacity duration-200"
        aria-label="Search"
      >
        🔍
      </button>
    </nav>
  );
};

export default NavBar;
