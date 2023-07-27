import React from "react";
import styles from "../styles";
import { skills } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Techstack = () => {
  return (
    <section className="section" id="techstack">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 grid-cols-3  md:grid-flow-row gap-x-8 ">
          {skills.map((skill, index) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex py-4 max-w-[125px] items-center justify-center"
                key={index}
              >
                <img src={skill.image} alt="" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Techstack;
