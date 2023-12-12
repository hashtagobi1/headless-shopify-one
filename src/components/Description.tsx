"use client";

import { opacity, slideUp } from "@/animations/descriptionAnimation";
import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Rounded from "./Shared/Rounded";

type Props = {};

const Description = (props: Props) => {
  const description = useRef(null);
  // ? detects when element is in viewport
  const isInView = useInView(description);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

  return (
    <div ref={description} className="px-48 mt-48 flex justify-center  ">
      <div className="max-w-7xl md:flex-row flex-col flex gap-12 relative">
        <p
          className="
        [&>*:nth-of-type(1)]:text-lg
        [&>*:nth-of-type(4)]:text-xl
        [&>*:nth-of-type(4)]:font-semibold
        [&>*:nth-of-type(1)]:leading-snug
          "
        >
          {phrase.split(" ").map((word, index) => (
            <span
              key={index}
              className="relative mr-1 overflow-hidden inline-flex"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className="top80  h-[180px] text-whte radius50 absolute flex items-center justify-center cursor-pointer ">
            <p className="m-0 text-sm text-center font-light relative z-[1]">
              About Me
            </p>
          </Rounded>
        </div>
      </div>
    </div>
  );
};

export default Description;
