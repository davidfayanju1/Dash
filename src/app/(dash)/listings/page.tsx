"use client";

import { useTheme } from "@/ThemeContext";
import Image from "next/image";
import React from "react";

const Listings = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`page-container md:px-[2rem] px-[1rem] min-h-screen ${
        theme === "dark" ? "bg-black/80 text-white " : "bg-white text-black"
      }`}
    >
      <div className="title-container mb-[2rem] pt-[2rem] flex items-center justify-between">
        <h1
          className={`title-text md:text-[1.3rem] text-[1rem] ${
            theme === "light" ? "text-black" : "text-white"
          } font-semibold`}
        >
          Product Listings
        </h1>

        <div className="toggle-container">
          <Image src={"/toggle.svg"} alt="toggle-icon" width={34} height={34} />
        </div>
      </div>
    </div>
  );
};

export default Listings;
