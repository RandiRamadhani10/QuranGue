import React from "react";
import logo from "../assets/Quran.png";
import "./style/style.css";
import { NavLink } from "react-router-dom";

const header = () => {
  window.onscroll = () => {
    let myNav = document.getElementById("mynav");
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      myNav.classList.add("bg-on");
      myNav.classList.remove("bg-trans");
    } else {
      myNav.classList.add("bg-trans");
      myNav.classList.remove("bg-on");
    }
  };

  return (
    <>
      <div id="mynav" className="fixed z top-0 md:border-0 delay-75 w-full justify-center shadow flex ">
        <NavLink to="/" className="md:flex w-5 md:w-8  m-2">
          <img className="w-full" src={logo} alt="" />
        </NavLink>
        <div className="container md:flex hidden justify-center text-white">
          <NavLink to="/surah" className="nav" activeClassName="nav border-b">
            <h4>Surah</h4>
          </NavLink>
          <NavLink to="/bookmark" className="nav" activeClassName="nav border-b">
            <h4>Bookmark</h4>
          </NavLink>
          <NavLink to="/about" className="nav" activeClassName="nav border-b">
            <h4>About</h4>
          </NavLink>
        </div>
        <div className="md:flex hidden w-8 m-2"></div>
      </div>
      <div className="w-full md:hidden flex justify-center items-center fixed bottom-0 bg-colorCustom border-t h-20">
        <NavLink to="/surah" className="nav-mobile-click" activeClassName="nav-mobile-click bg-colorCustom-dark">
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-mobile" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </NavLink>
        <NavLink to="/bookmark" className="nav-mobile-click" activeClassName="nav-mobile-click bg-colorCustom-dark">
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-mobile " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </NavLink>
        <NavLink to="/about" className="nav-mobile-click" activeClassName="nav-mobile-click bg-colorCustom-dark">
          <svg xmlns="http://www.w3.org/2000/svg" className="nav-mobile" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default header;
