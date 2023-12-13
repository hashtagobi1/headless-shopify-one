import Contact from "@/components/Contact";
import Description from "@/components/Description";
import SlidingWrapper from "@/components/SlidingWrapper";
// import { useEffect, useState } from "react";
import Products from "./Products";
import PreLoader from "@/components/PreLoader";
import Welcome from "./Welcome";

const HomePage = () => {
  // const [loading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   let timeoutId: number;
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();

  //     setTimeout(() => {
  //       setIsLoading(false);
  //       document.body.style.cursor = "default";
  //       alert("loaded");
  //     }, 100);
  //   })();

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  // console.log({ loading });

  return (
    <main className="">
      {/* {loading && <PreLoader />} */}

      {/* <Products /> */}
<Welcome/>
      <Description />
      <SlidingWrapper />
      <Contact />
    </main>
  );
};

export default HomePage;
