import React from "react";
import Image from "../assets/profile.svg";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="home" className="section">
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-row justify-between items-center">
          {/* text */}
          <div>
            <h1>
              Komang <span>Chandra Winata</span>
            </h1>
            <div className="mb-2 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1]">
              <span className="mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Desainer",
                  2000,
                  // "Content Creator",
                  // 2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-2">
              Backend Developer with Laravel. Proficient in PHP, HTML, Tailwind
              CSS, and Bootstrap. Experienced in UI/UX development.
            </p>
            <div className="flex text-[20px] mb-5 lg:mb-0">
              <a href="#" className="mr-3">
                <FaLinkedinIn />
              </a>
              <a href="#" className="mr-3">
                <FaGithub />
              </a>
              <a href="#" className="mr-3">
                <FaInstagram />
              </a>
              <a href="#" className="mr-3">
                <FaTiktok />
              </a>
            </div>
          </div>
          {/* foto */}
          <div>
            <img src={Image} className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
