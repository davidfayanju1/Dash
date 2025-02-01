"use client";

import LAside from "@/components/LAside";
import Main from "@/components/Main";
import RAside from "@/components/RAside";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="dash-container min-h-screen bg-gray-300 flex items-start justify-center">
      {/* Sidebar for larger screens */}
      <div className="aside-container w-[16rem] h-screen overflow-y-scroll no-scrollbar fixed top-0 left-0 md:block hidden">
        <RAside />
      </div>

      {/* Animated Sidebar for mobile */}
      <motion.div
        initial={{ x: "-100%" }} // Start off-screen to the left
        animate={{ x: toggle ? 0 : "-100%" }} // Animate to visible or hidden
        transition={{ duration: 0.3 }} // Set the duration of the animation
        className="aside-container overflow-y-scroll w-[16rem] h-screen no-scrollbar fixed top-0 left-0 block md:hidden"
      >
        <RAside />
      </motion.div>

      <div className="flex-container ml-0 md:ml-[16rem] min-h-screen w-full flex items-start justify-start md:flex-row flex-col">
        <div className="md:w-[80%] w-full">
          <Main setToggle={setToggle} toggle={toggle} />
        </div>
        <div className="md:w-[20%] w-full">
          <LAside />
        </div>
      </div>
    </div>
  );
}
