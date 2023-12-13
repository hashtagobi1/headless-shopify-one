"use client";

import { MagneticButtonProps } from "@/types";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Magnetic = ({ children }: any) => {
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    // * gsap.to("element", {properties to go to}), no need to define starting points
    // * a "tween" refers to a type of animation.

    // ? QuickTo:
    // ? boost performance if calling gsap.to() many times in a row on SAME target/numeric property
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    if (magnetic.current) {
      magnetic.current.addEventListener("mousemove", (e: MouseEvent) => {
        const { clientX, clientY } = e;
        //   ? returns size of an element and position relative to top part of page
        if (magnetic.current) {
          const { height, width, left, top } =
            magnetic.current.getBoundingClientRect();
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x * 0.35);
          yTo(y * 0.35);
        }
      });
      magnetic.current.addEventListener("mouseleave", (e: MouseEvent) => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
