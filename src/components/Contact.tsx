"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../components/Shared/Magnetic";
import Rounded from "../components/Shared/Rounded";

const Contact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={"contact"}>
      <div className={"body mb-20"}>
        <div className={"title"}>
          <span className="flex justify-center">
            {/* <div className={"imageContainer"}>
              <Image width={1000} height={1000} alt={"image"} src={`/images/background.jpg`} />
            </div> */}
            <h2>Let's talk!</h2>
          </span>
        </div>
        <a
          href="mailto:anokwuruobi@gmail.com?subject=Shopify Developer Application&body=Hi Obi, I hope you are well."
          className={"flex justify-center mt-10"}
        >
          <Rounded>
            <button className="z-[99]">anokwuruobi@gmail.com</button>
          </Rounded>
          {/* <Rounded>
            <p>+31 6 27 84 74 30</p>
          </Rounded> */}
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
