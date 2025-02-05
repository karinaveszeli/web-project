import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (




    <div className="relative w-full overflow-hidden" id="Header">
      <div className="relative w-full">
        <img
          src="https://res.cloudinary.com/dpp0qvpj9/image/upload/f_auto,q_auto/v1738776212/header_img_bexwix.png"
          alt="Background Image"
          className="w-full h-auto object-contain block"
          loading="lazy"
        />
      </div>

      <NavBar />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-sm sm:text-md md:text-lg opacity-70">Creative, <span>Inspiration</span></p>
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight sm:leading-snug md:leading-tight">
          I Like to Keep Things Simple to <br /> Appreciate the Details
        </h2>
        <p className="text-white text-xs sm:text-sm md:text-md opacity-80 mt-2 sm:mt-4">By: Peter Roward</p>
      </div>
    </div>
  );
};

export default Header;
