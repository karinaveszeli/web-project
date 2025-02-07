import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <section
      className="relative w-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dpp0qvpj9/image/upload/f_auto,q_auto/v1738776212/header_img_bexwix.png')" }}
      id="Header"
    >
      <div className="absolute inset-0">
        <NavBar />
      </div>


      <div className="relative px-4 mx-auto max-w-screen-xl text-center flex flex-col justify-center items-center min-h-[70vh] sm:min-h-[75vh] 
      md:min-h-[80h] lg:min-h-[85vh]">

        <p className="text-white text-sm sm:text-md md:text-lg opacity-70">
          Creative, <span>Inspiration</span>
        </p>



        <h2 className="text-white text-[clamp(1.5rem, 4vw, 2.5rem)] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-snug md:leading-tight">
          I Like to Keep Things Simple to <br /> Appreciate the Details
        </h2>



        <p className="text-white text-xs sm:text-sm md:text-md opacity-80 mt-2 sm:mt-4">
          By: Peter Roward
        </p>

      </div>
    </section>
  );
};

export default Header;
