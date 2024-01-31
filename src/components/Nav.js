import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi"; //Box Icon
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"; //Icon Bootstrap
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 overflow-hidden z-50 w-full">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
