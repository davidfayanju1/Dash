"use client";

import LAside from "@/components/LAside";
import Main from "@/components/Main";
import RAside from "@/components/RAside";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { ThemeProvider } from "@/ThemeContext";

export default function Home() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <div className="dash-container min-h-screen bg-white flex items-start justify-center relative">
        {/* Sidebar for larger screens */}
        <div className="aside-container w-[16rem] h-screen overflow-y-scroll no-scrollbar fixed top-0 left-0 md:block hidden">
          <RAside />
        </div>

        {/* Overlay and Animated Sidebar for mobile */}
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black md:hidden"
            onClick={() => setToggle(false)}
          />
        )}
        <motion.div
          initial={{ x: "-100%" }} // Start off-screen to the left
          animate={{ x: toggle ? 0 : "-100%" }} // Animate to visible or hidden
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }} // Set the duration and easing of the animation
          className="aside-container overflow-y-scroll w-[16rem] h-screen no-scrollbar fixed top-0 left-0 block md:hidden"
        >
          <RAside />
        </motion.div>

        <div className="flex-container ml-0 md:ml-[16rem] min-h-screen w-full flex items-start justify-start md:flex-row flex-col">
          <div className="md:w-[80%] w-full min-h-[100vh]">
            <Main setToggle={setToggle} toggle={toggle} />
          </div>
          <div className="md:w-[20%] w-full h-full">
            <LAside />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
