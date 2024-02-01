import React from "react";
import Img1 from "../assets/experience-1.jpg";
import Img2 from "../assets/experience-2.jpg";
import Img3 from "../assets/experience-3.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* left content row */}
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* Text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}>
              <h2 className="h2 leading-tight text-accent">
                Career Path
                <br />
                Experience
              </h2>
              <p className="max-w-sm lg:mb-8 mb-5">
                I combine academic insight, organizational leadership, and
                internship experience to form a strong foundation in my career.
              </p>
            </motion.div>
            {/* Experience 1 */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-60">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-300"
                src={Img1}
                alt="Teknokrat University"
              />
              {/* pretitle */}
              <div className="absolute buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-accent font-bold text-xl font-primary">
                  S1 Sistem Informasi
                </span>
              </div>
              {/* title */}
              <div className="absolute buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="lg:text-3xl sm:text-lg text-white">
                  Teknokrat University
                </span>
              </div>
            </motion.div>
          </div>
          {/* right content row */}
          <div className="flex-1 flex flex-col gap-y-10">
            {/* Experience 2 */}
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-60">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-300"
                src={Img2}
                alt="Teknokrat University"
              />
              {/* pretitle */}
              <div className="absolute buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-accent font-bold text-xl font-primary">
                  Head of Departement Data and Information
                </span>
              </div>
              {/* title */}
              <div className="absolute buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="lg:text-3xl sm:text-lg text-white">
                  KMHDI Bandar Lampung
                </span>
              </div>
            </motion.div>
            {/* Experience 3 */}
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-60">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-300"
                src={Img3}
                alt="Teknokrat University"
              />
              {/* pretitle */}
              <div className="absolute buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-accent font-bold text-xl font-primary">
                  Internship as Costumer Engagement
                </span>
              </div>
              {/* title */}
              <div className="absolute buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="lg:text-3xl sm:text-lg text-white">
                  Gojek Lampung
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
