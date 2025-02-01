import Image from "next/image";
import React from "react";

const RAside = () => {
  const listing = [
    {
      name: "Overview",
    },

    {
      name: "Listings",
    },
  ];
  return (
    <div className="w-full md:px-[2rem] px-[1rem] h-full bg-white border-r-[1px] border-gray-200">
      <section className="logo-container py-[1.4rem] flex items-center gap-3">
        <Image
          className="object-cover rounded-full"
          src={"/Frame.png"}
          alt="user-image"
          width={50}
          height={50}
        />

        <span className={"block text-black"}>Prelura</span>
      </section>

      <div className="button-flex-container mt-[1rem] flex items-center gap-4">
        <button className="text-black/40 text-[1rem]">Favorites</button>
        <button className="text-black/20 text-[1rem]">Recent</button>
      </div>

      <section className="listings flex items-start justify-start gap-3 flex-col w-full mt-[1.5rem] mb-[2.5rem]">
        {listing.map(({ name }) => (
          <div
            key={name}
            className="item-card cursor-pointer w-[12rem] py-[.6rem] rounded-[15px] flex items-center"
          >
            <Image src={"/dot.svg"} alt="dot-icon" width={30} height={30} />
            <span className="block text-black transition-all ease-in-out delay-75 hover:translate-x-2">
              {name}
            </span>
          </div>
        ))}
      </section>

      <section className="dashboard">
        <span className="title font-semibold text-[1.3rem] text-black">
          Dashboard
        </span>
      </section>
    </div>
  );
};

export default RAside;
