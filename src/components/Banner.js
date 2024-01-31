import React from "react";
import Image from "../assets/profile.svg";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[96vh]">
      <div className="container mx-auto mt-0">
        <div className="lg:flex lg:flex-row justify-between items-center">
          {/* text */}
          <div>
            {/* My Name */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold lg:text-[80px] lg:mb-4 mb-1 leading-[1]">
              Komang Chandra <span className="hidden lg:flex">Winata</span>
            </motion.h1>
            {/* My Role */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 text-[33px] lg:text-[60px] font-secondary font-semibold leading-[1]">
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
            </motion.div>
            {/* My Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2">
              Front-End Developer with{" "}
              <span className="font-semibold">React JS</span>. Proficient in{" "}
              <span className="font-semibold">
                HTML, Tailwind CSS, Bootstrap
              </span>
              . Experienced in{" "}
              <span className="font-semibold">UI/UX development</span>.
            </motion.p>
            {/* My Sosial */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex text-[20px] mb-5 lg:mb-0">
              <a
                href="https://www.linkedin.com/in/komang-chandra-winata/"
                target="_blank"
                className="mr-5">
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/komangchandra"
                target="_blank"
                className="mr-5">
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/komang_chandraa/"
                target="_blank"
                className="mr-5">
                <FaInstagram />
              </a>
              {/* <a href="#" className="mr-5">
                <FaTiktok />
              </a> */}
            </motion.div>
          </div>
          {/* foto */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:max-w-[482px]">
            <img src={Image} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
