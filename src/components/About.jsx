import React from "react";
import styles from "../styles";
import about from "../assets/about.png";
import about2 from "../assets/about2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-1 flex-col gap-y-4 lg:gap-y-8 lg:flex-row items-center lg:gap-x-20">
          <motion.img
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            src={about2}
            alt="about"
            className="max-w-[250px] max-h-[250px] lg:max-w-[650px] lg:max-h-[450px] rounded-2xl"
          />
          <div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <h1 className="about textgradient text-[20px] lg:text-[40px]">
                About Me
              </h1>
              <h3 className="about text-[10px] lg:text-[20px]">
                Blockend Developer
              </h3>
              <hr className="mb-2 opacity-5" />
              <hr className="horizonline" />
              <div className="mb-2 lg:mb-4 ">
                <p className="abouttext font-bold leading-5 lg:leading-7 my-auto mb-3 lg:mb-8 ">
                  As a Blockchain Enthusiast I like to explore vast use cases of
                  blockchain technology. As life is all about learning every
                  day, I enjoy exploring new technologies, frameworks and tools
                  which can help me become better in every aspects. Open and
                  excited for new ideas and collaboration that can help me grow
                  and gain more knowledge to build scalable and efficient
                  solutions which also makes me a good team player.
                </p>
              </div>
              <div className="items-center flex gap-x-10 mx-auto">
                <button className="btn btn-lg">
                  <Link
                    to="contact"
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                  >
                    Contact Me
                  </Link>
                </button>
                <a href="#projects" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
