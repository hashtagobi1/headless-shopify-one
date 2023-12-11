import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Curve = (props: Props) => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <div>
      <svg className="absolute top-0 -left-24 w-full h-full stroke-none text-gray-700">
        <motion.path
          variants={curve}
          initial="initial"
          animate="enter"
          exit={"exit"}
        ></motion.path>
      </svg>
    </div>
  );
};

export default Curve;
