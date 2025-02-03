import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
    style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
    <NavBar/>

    </div>
  )
    
};

export default Header;
