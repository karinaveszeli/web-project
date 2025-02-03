import React from "react";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center px-10 py-4 text-white font-poppins">
    {/* Bal oldali "VENCE" logó */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-wide">VENCE</h1>

    {/* Jobbra zárt menüpontok */}
    <ul className="ml-auto flex gap-8 text-lg">
      <li><a href="#" className="hover:text-gray-300">Home</a></li>
      <li><a href="#" className="hover:text-gray-300">Inspiration</a></li>
      <li><a href="#" className="hover:text-gray-300">Courses</a></li>
      <li><a href="#" className="hover:text-gray-300">Blog</a></li>
    </ul>

    {/* Jobbra zárt kereső ikon */}
    <button className="ml-6 text-white bg-gray-800 p-2 rounded-lg">🔍</button>
  </nav>
  );
};

export default NavBar;
