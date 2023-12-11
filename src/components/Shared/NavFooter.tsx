import React from "react";

type Props = {};

const NavFooter = (props: Props) => {
  return (
    <div className={`flex w-full justify-between text-xs gap-10`}>
      <a>Awwwards</a>
      <a>Instagram</a>
      <a>Dribble</a>
      <a>LinkedIn</a>
    </div>
  );
};

export default NavFooter;
