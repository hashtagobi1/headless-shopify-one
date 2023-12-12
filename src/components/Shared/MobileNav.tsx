"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { menuSlide } from "../../animations/menuSlide";
import CustomLink from "./CustomLink";
import NavFooter from "./NavFooter";
import Curve from "./Curve";
import Rounded from "./Rounded";
type Props = {};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
type MobileNavProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
const MobileNav = ({ isActive, setIsActive }: MobileNavProps) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-slate-700 fixed right-0 top-0 text-white z-[1]"
    >
      <div className="box-border h-full p-24 flex flex-col justify-between">
        {isActive && (
          <Rounded
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="roundedButton"
            // z-50 m-5 w-20 h-20  bg-[#1c1d20] cursor-pointer flex items-center justify-center"
            active={isActive}
          >
            <div
              className={`burger p-20 ${isActive ? "burgerActive" : ""}`}
            ></div>
          </Rounded>
        )}
        <div
          className="mobileNav"
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className="text-gray-300 border-b border-gray-600 uppercase text-xs  mb-10">
            <p className="mb-4">Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <CustomLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></CustomLink>
            );
          })}
        </div>
        <NavFooter />
      </div>
      {/* <Curve /> */}
    </motion.div>
  );
};

export default MobileNav;
