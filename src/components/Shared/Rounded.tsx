"use client";

import { RoundedProps } from "@/types";
import React, { useEffect, useRef } from "react";
import Magnetic from "./Magnetic";
import gsap from "gsap";
import { Bars4Icon } from "@heroicons/react/20/solid";
const Rounded = ({
  backgroundColor = "#455CE9",
  children,
  active,
  ...rest
}: RoundedProps): React.JSX.Element => {
  const circle = useRef<HTMLDivElement>(null);
  let timeline: React.MutableRefObject<any> = useRef(null);
  let timeoutID: NodeJS.Timeout | null = null;

  useEffect(() => {
    // ? timeline = container for tweens + other timelines
    // ? prevents you from adding multiple delays when previous element has animated
    // ? repeat - how many times tween should repeat after iteration
    // ? paused gets state of animation
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutID) clearTimeout(timeoutID);
    timeline.current.tweenFromTo("enter", "exit");
  };
  const manageMouseLeave = () => {
    timeoutID = setTimeout(() => {
      // ? play - begins playing forward
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        {...rest}
        style={{ overflow: "hidden" }}
        className="roundedButton"
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
      >
        {children}
        {/* <div ref={circle}>
          <Bars4Icon className="" width={20} height={20} />
        </div> */}
        <div
          ref={circle}
          className={` bg-black  w-full radius50 absolute height150 top-full`}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Rounded;
