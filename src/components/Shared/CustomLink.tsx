import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animations/menuSlide";
type LinkProps = {
  data: {
    index: number;
    title: string;
    href: string;
  };
  isActive: boolean;
  setSelectedIndicator: Dispatch<SetStateAction<string>>;
};

const CustomLink = ({ data, isActive, setSelectedIndicator }: LinkProps) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2 h-2 bg-white rounded-full absolute -left-8"
      ></motion.div>
      <Link href={href} passHref>
        {title}
      </Link>
    </motion.div>
  );
};

export default CustomLink;
