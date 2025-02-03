import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden" id="Header">
      
      <div className="absolute inset-0">
        <img
          src="/header_img.png"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <NavBar /> 

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg opacity-70">Creative, <span>Inspiration</span></p>
        <h2 className="text-white text-4xl font-bold md:text-5xl leading-tight">
          I Like to Keep Things Simple to <br /> Appreciate the Details
        </h2>
        <p className="text-white text-md opacity-80 mt-4">By: Peter Roward</p>
      </div>
    </div>
  );
};

export default Header;
