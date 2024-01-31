import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            {/* <img src={Logo} alt="ini logo"  /> */}
            <h1 className="font-normal text-3xl uppercase">
              <span className="text-[#b936ee] font-bold">Ko</span>
              Chan.
            </h1>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
