import React from "react";
import image from "../assets/about2.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Card = ({ item }) => {
  return (
    <motion.div
      key={item.id}
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
    >
      <div className="h-[300px] w-64 lg:h-80 lg:w-64">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={item.image}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">
          {item.name}
        </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {item.description}
        </p>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 border-b-2 border-blue-400">
          {item.category}
        </p>
        <a href={item.href} target="_blank">
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
