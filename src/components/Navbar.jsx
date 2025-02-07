import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-4 text-white font-poppins z-50">


      <h1 className="font-bold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[25px] text-white">
        VENCE<span className="text-[#c8a876]">.</span>
      </h1>


      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {menuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

     
      <div className={`md:flex items-center space-x-6 ${menuOpen ? "block absolute top-[60px] left-0 w-full bg-black text-white text-center py-4 text-lg" : "hidden md:flex md:relative md:bg-transparent md:py-0 md:text-left"}`}>
      <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-[12px] md:text-[18px] leading-[25px] font-normal text-[#F8F9FA] opacity-70"><li>
            <a href="/" className="px-3 py-1 rounded-md hover:bg-[#ffffff22] transition duration-200">Home</a></li>

          <li className="relative group">
            <a href="/courses" className="px-3 py-1 flex items-center hover:bg-[#ffffff40] transition duration-200">
              Courses
              <span className="ml-2">
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.6891 4.72616L0.128783 1.16583C-0.0429278 0.994114 -0.0429278 0.715726 0.128783 0.544034L0.544038 0.128779C0.715456 -0.0426389 0.993275 -0.0429688 1.1651 0.128046L4.00001 2.94968L6.8349 0.128046C7.00672 -0.0429688 7.28454 -0.0426389 7.45596 0.128779L7.87122 0.544034C8.04293 0.715745 8.04293 0.994132 7.87122 1.16583L4.31091 4.72616C4.1392 4.89786 3.86082 4.89786 3.6891 4.72616Z" fill="#F8F9FA" fillOpacity="0.5" />
                </svg>
              </span>
            </a>
          </li>

          <li className="relative group">
            <a href="/inspiration" className="px-3 py-1 flex items-center hover:bg-[#ffffff40] transition duration-200">
              Inspiration
              <span className="ml-2">
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.6891 4.72616L0.128783 1.16583C-0.0429278 0.994114 -0.0429278 0.715726 0.128783 0.544034L0.544038 0.128779C0.715456 -0.0426389 0.993275 -0.0429688 1.1651 0.128046L4.00001 2.94968L6.8349 0.128046C7.00672 -0.0429688 7.28454 -0.0426389 7.45596 0.128779L7.87122 0.544034C8.04293 0.715745 8.04293 0.994132 7.87122 1.16583L4.31091 4.72616C4.1392 4.89786 3.86082 4.89786 3.6891 4.72616Z" fill="#F8F9FA" fillOpacity="0.5" />
                </svg>
              </span>
            </a>
          </li>

          <li><a href="/blog" className="px-3 py-1 flex items-center hover:bg-[#ffffff40] transition duration-200">Blog</a></li>
        </ul>



        <span className="hidden md:block w-[1px] h-[25px] bg-[#E5E5E5] opacity-50"></span>


        <button className="flex items-center justify-center w-[36px] h-[36px] opacity-50 hover:opacity-100  transition-opacity duration-200">
          <svg width="18" height="18" viewBox="0 0 12 12" fill="rgba(248, 249, 250, 0.5)" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8368 10.3765L9.49991 8.03965C9.39444 7.93417 9.25146 7.87558 9.10145 7.87558H8.71939C9.36631 7.04817 9.75071 6.00747 9.75071 4.87536C9.75071 2.18219 7.56852 0 4.87536 0C2.18219 0 0 2.18219 0 4.87536C0 7.56852 2.18219 9.75071 4.87536 9.75071C6.00747 9.75071 7.04817 9.36631 7.87558 8.71939V9.10145C7.87558 9.25146 7.93417 9.39444 8.03965 9.49991L10.3765 11.8368C10.5969 12.0571 10.9531 12.0571 11.1711 11.8368L11.8345 11.1735C12.0548 10.9531 12.0548 10.5969 11.8368 10.3765ZM4.87536 7.87558C3.2182 7.87558 1.87514 6.53485 1.87514 4.87536C1.87514 3.2182 3.21586 1.87514 4.87536 1.87514C6.53251 1.87514 7.87558 3.21586 7.87558 4.87536C7.87558 6.53251 6.53485 7.87558 4.87536 7.87558Z" fill="#F8F9FA" fill-opacity="0.5"/>
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default NavBar;
