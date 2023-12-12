"use client";

import { getShopDetails } from "@/getQueries/fetchers";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Magnetic from "./Shared/Magnetic";
import Rounded from "./Shared/Rounded";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./Shared/MobileNav";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Navbar = () => {
  const header = useRef(null);
  const button = useRef(null);
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  // const json = await getShopDetails();

  useEffect(() => {
    // * good check to initialize variable
    if (isActive) setIsActive(false);
  }, [pathname]);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <>
      <div
        ref={header}
        className="absolute mb- flex z-1 top-0 text-black p-9 justify-between w-full font-light box-border items-center"
      >
        <div className={``}>
          {/* <p className={``}>© A Shop By {json.data.shop.name}</p> */}
        </div>

        <div className="flex items-center divide-x">
          <Magnetic>
            <div className="flex flex-col items-center relative z-10 p-5 cursor-pointer group ">
              <a className="bigDick">Home</a>
              <div className="indicator "></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="flex flex-col items-center relative z-10 p-5 cursor-pointer group ">
              <a className="">Collections</a>
              <div className="indicator "></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="flex flex-col items-center relative z-10 p-5 cursor-pointer group ">
              <a className="">About</a>
              <div className="indicator "></div>
            </div>
          </Magnetic>
        </div>
        <button
          ref={button}
          className="transition-transform scale-0 fixed right-0 z-4"
        >
          <Rounded
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="z-50 m-5 w-20 h-20 radius50 bg-[#1c1d20] cursor-pointer flex items-center absolute justify-center"
            active={isActive}
          >
            <div
              className={`burger p-8 ${isActive ? "burgerActive" : ""}`}
            ></div>
          </Rounded>
        </button>
        {/* // ?  components to animate out when they're removed from the React tree */}
        <AnimatePresence
          onExitComplete={() =>
            console.log({ EXITED: `Not on Screen: ${isActive}!` })
          }
          mode="wait"
        >
          {isActive && <MobileNav setIsActive={setIsActive} isActive={isActive} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
/*

    <nav className="mt-10">
      <h1 className="font-bold mb-3 text-3xl text-center">
        {json.data.shop.name}
      </h1>

      <ul className="text-center">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
      </ul>
    </nav>


*/
