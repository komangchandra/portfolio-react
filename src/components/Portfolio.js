import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const portfolios = [
  {
    name: "My Portfolio Website",
    description:
      "Building a portfolio website based on React JS, creating a dynamic interactive experience to showcase creativity and professional skills.",
    enpoint: "#",
  },
  {
    name: "Web GIS Laravel",
    description:
      "GIS website: Soybean land suitability map undergraduate thesis project in East Lampung. Using Laravel and leaflet.",
    enpoint: "https://github.com/komangchandra/skripsi",
  },
  {
    name: "Laravel Simple Blog App",
    description: "Develop a simple blog app website with Laravel",
    enpoint: "https://github.com/komangchandra/laravel-blog-app",
  },
  {
    name: "Profile Company",
    description:
      "Manage a company profile website with the WordPress CMS at kmhdibdl.org, presenting organizational information effectively.",
    enpoint: "https://kmhdibdl.org/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* text dan foto*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-portfolio lg:bg-bottom bg-no-repeat mix-blend-lighten">
            <h2 className="h2 text-accent mb-6">Featured Portfolios.</h2>
            <h3 className="h3 max-w-[455px]">
              Achievements and projects that reflect ability and discipline
            </h3>
          </motion.div>
          {/* Portfolio */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            {/* List Portfolio */}
            <div>
              {portfolios.map((portfolio, index) => {
                // distractur
                const { name, description, enpoint } = portfolio;
                return (
                  <div
                    className="border-b border-white/20 h-[150px] mb-[5px] flex flex-row justify-between"
                    key={index}>
                    <div className="max-w-[476px] flex flex-col justify-center">
                      <h4 className="lg:text-[18px] text-[15px] tracking-wider font-primary font-semibold mb-3">
                        {name}
                      </h4>
                      <p className="text-[12px] lg:text-[14px]">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end justify-center">
                      <a
                        href={enpoint}
                        target="_blank"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
