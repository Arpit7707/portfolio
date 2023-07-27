import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i + 1;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.div className="flex flex-col items-center pt-3">
      {/* <motion.svg
        width="174"
        height="123"
        viewBox="0 0 174 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M2 90C2.42525 63.2093 2.0359 31.9178 11.8333 6.44444C13.4701 2.18897 19.3892 7.82326 20.5556 9.77778C27.7303 21.8003 29 35.4057 29 49C29 62.3333 29 75.6667 29 89"
          stroke=" #000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M3 58C9.58944 49.4886 18.777 42.6115 28 38"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M39 88C39.7083 75.2503 44.8374 59.5183 41.9444 46.5C41.1218 42.798 37.0869 43.6424 37.4444 44C39.7595 46.3151 44.7376 45.9653 47.5 47.5C54.9785 51.6547 58 53.8564 58 63.4445C58 67.9362 56.5868 76.2213 59 80.4445C61.42 84.6794 74.1864 82 79 82"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M77 51C87.7536 51 88.5526 67.1558 90.7778 75.2222C92.801 82.5566 93 92.893 93 100.444C93 107.296 93 114.148 93 121"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M87 59C94.4609 51.5391 107.372 54.0649 108 66C108.08 67.521 108.873 76.5362 107.444 76.9444C103.34 78.1171 99.2181 79 95 79"
          stroke="#000066"
          sstrokeWidth="30"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M113 55C114.774 53.2261 129 39.522 129 45.2222C129 49.0098 128.309 55.5549 126.778 59C125.356 62.1986 124 62.7045 124 66.5C124 70.1115 122.185 80 126.5 80C128.981 80 131.984 81 134.944 81C140.401 81 140 77.8813 140 73"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M119 36C119 37.8818 119.101 39.6717 116.556 38.9444C115.596 38.6702 117.712 36.575 118 36"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M134 2C134.889 6.88918 139.151 11.2408 140.556 16.0556C142.003 21.0179 143 26.3215 143 31.5C143 39.8062 147.243 46.0543 148 54C148.176 55.8517 148.722 57.7231 149.056 59.5556C149.47 61.8372 151.349 62.1809 151.889 63.6667C152.881 66.3963 152.888 73.6261 156.667 75C160.993 76.5731 171.739 83.4458 172 74.5556C172.212 67.3359 169.979 61.9586 167 56"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M133 32C134.395 25.4887 138.327 20.8718 143 16.4444C144.23 15.279 147.005 14.4591 147.778 13C148.759 11.146 150.234 11.5321 151 10"
          stroke="#000066"
          strokeWidth="7"
          strokeLinecap="round"
          variants={draw}
        />
      </motion.svg> */}

      <motion.p
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="newtext"
      >
        Arpit
      </motion.p>
    </motion.div>
  );
};

export default Header;
