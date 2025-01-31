import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <main className="bg-white min-h-screen ">
      <nav className="nav-container md:px-[2rem] px-[1rem] py-[1.4rem] border-b-[1px] border-gray-200 flex items-center justify-between">
        <div className="first-item-container flex items-center gap-3 bg-red-800 h-full">
          <Image src={"/book.svg"} alt="svg-component" width={30} height={30} />
          <Image src={"/star.svg"} alt="svg-component" width={30} height={30} />

          <span className="block text-black/40">
            Dashboard /<span className="text-black">Default</span>
          </span>
        </div>
        <div className="second-item-container"></div>
      </nav>

      <section className="overview"></section>
    </main>
  );
};

export default Main;
