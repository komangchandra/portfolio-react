import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi"; //Box Icon
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"; //Icon Bootstrap
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 overflow-hidden z-50 w-full">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[300px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-90}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          {/* <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
            <BiUser />
          </Link> */}
          <Link
            to="portfolio"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
