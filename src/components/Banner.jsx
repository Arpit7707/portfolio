import React from "react";
import styles from "../styles";
import image from "../assets/photo.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section mb-4" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-tertiary text-[50px] font-bold leading-[0.8] lg:text-[90px]"
            >
              ARPIT <span>JETHAVA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 ">I am a</span>
              <TypeAnimation
                sequence={[
                  "MERN Developer",
                  2000,
                  "Blockchain Developer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                className="textgradient "
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-1 max-w-lg mx-auto font-bold lg:mx-0"
            >
              I am a Blockchain developer, exploring emerging Web3 world and
              practicing to build solutions and exploring innovative aspects of
              blockchain space.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="items-center max-w-[320px] lg:max-w-[485px] hidden xl:inline-block md:inline-block lg:inline-block"
          >
            <img
              src={image}
              alt="image"
              className="rounded-full border-8 bg-purple-900 border-teal-400"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
