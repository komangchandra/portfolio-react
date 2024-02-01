import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div id="contact" className="py-16 lg:section">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1">
            <div>
              <h4 className="text-xl lg:text-3xl uppercase text-accent font-medium mb-2 tracking-wide">
                Inquiry
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Reach Out <br />
                to Me
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-2 p-5 pb-11 items-start">
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-none"
              placeholder="Your message"></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
