import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (

    <div
    className="relative min-h-screen w-full bg-cover bg-center"
    style={{
      backgroundImage: "url('/header_img.png')",
      backgroundSize: "110% ", 
      backgroundRepeat: "no-repeat", 
    backgroundPosition: "top", 
    }}
    id="Header"
  >
      
    <NavBar/>

    </div>
  )
    
};

export default Header;
