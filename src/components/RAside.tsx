import Image from "next/image";
import React from "react";

const RAside = () => {
  return (
    <div className="w-full md:px-[2rem] px-[1rem] h-full bg-white border-r-[1px] border-gray-200">
      <section className="logo-container py-[.6rem] flex items-center gap-3">
        <Image
          className="object-cover rounded-full"
          src={"/Frame.png"}
          alt="user-image"
          width={50}
          height={50}
        />

        <span className={"block text-black"}>Prelura</span>
      </section>

      <div className="button-flex-container"></div>
    </div>
  );
};

export default RAside;
