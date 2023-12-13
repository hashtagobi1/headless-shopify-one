"use client";
import { slideUp } from "@/animations/descriptionAnimation";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

type Props = {};

const Welcome = () => {
  let timelineID: number;
  const [loading, setLoading] = React.useState(false);
  const phrase = "Welcome";

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 300);

    return clearTimeout(timelineID);
  }, []);
  return (
    <motion.div className="h-screen flex items-center justify-center font-bold text-6xl">
      {/* {loading && <motion.h1>{phrase}</motion.h1>} */}

      {phrase.split("").map((word, index) => (
        <span key={index} className="relative mr-1 overflow-hidden inline-flex">
          <motion.span
            variants={slideUp}
            custom={index}
            animate={loading ? "open" : "closed"}
            key={index}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default Welcome;
