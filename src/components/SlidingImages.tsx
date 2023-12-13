"use client";

import { ShopifyProduct, getAllProducts_GQL_Response } from "@/types";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
type Props = {};
const slider1 = [
  {
    color: "#e3e5e7",
    src: "c2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "decimal.jpg",
  },
  {
    color: "#e3e3e3",
    src: "funny.jpg",
  },
  {
    color: "#21242b",
    src: "google.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "maven.jpg",
  },
  {
    color: "#e5e0e1",
    src: "panda.jpg",
  },
  {
    color: "#d7d4cf",
    src: "powell.jpg",
  },
  {
    color: "#e1dad6",
    src: "wix.jpg",
  },
];

const SlidingImages = (allProducts: getAllProducts_GQL_Response) => {
  const {
    data: {
      products: { nodes: items },
    },
  } = allProducts;
  console.log(items.length);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  const ImageContainer = (
    x: MotionValue<number>,
    slider: {
      color: string;
      src: string;
    }[]
  ) => (
    <motion.div style={{ x }} className="gap-14  flex  relative width-[120vw]">
      {slider.map((project, index) => (
        <div
          key={index}
          style={{ backgroundColor: project.color }}
          className={`left[-10%] mb-14   w-full  h-[45vh] flex items-center justify-center`}
        >
          <div className="relative w-5/6 h-5/6">
            <Image
              className="object-cover"
              fill={true}
              alt={"image"}
              src={`/images/${project.src}`}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
  return (
    <div
      ref={container}
      className="flex flex-col gap-14 md:w-full relative mt-52 z-[2] bg-white"
    >
      <div className="[&>*:nth-of-type(2)]:mb-0">
        {ImageContainer(x1, slider1)}
        {ImageContainer(x2, slider2)}
      </div>
      {/* {ImageContainer(x2, slider2)} */}
      <motion.div style={{ height }} className="bg-red-500 relative">
        <div
          className="h-[3060%] w-[120%] left-[-10%]
        bigCircleRadius
        bg-white absolute z-[1] "
        ></div>
      </motion.div>
    </div>
  );
};

export default SlidingImages;
