"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuSlide } from "../../animations/menuSlide";
import CustomLink from "./CustomLink";
import NavFooter from "./NavFooter";
import Curve from "./Curve";
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

const MobileNav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-slate-700 fixed right-0 top-0 text-white z-10"
    >
      <div className="box-border h-full p-24 flex flex-col justify-between">
        <div
          className="flex flex-col text-5xl gap-3 mt-20"
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <div className="text-gray-300 border-b border-gray-600 uppercase text-xs  mb-10">
            <p className="">Navigation</p>
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
