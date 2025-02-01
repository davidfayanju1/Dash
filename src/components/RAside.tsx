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

  const dashboards = [
    {
      name: "Overview",
      icon: "/dashoverview.svg",
      active: true,
    },

    {
      name: "User Mgmt",
      icon: "/usermgt.svg",
      active: false,
    },
    {
      name: "Listings",
      icon: "/listings.svg",
      active: false,
    },
  ];

  const reports = [
    {
      name: "Flagged",
      icon: "/flagged.svg",
      iconII: "/arrowright.svg",
    },
    {
      name: "Listings",
    },
    {
      name: "Users",
    },
    {
      name: "Messages",
    },
    {
      name: "Flagged",
    },
  ];
  return (
    <div className="w-full pb-[4rem] md:px-[2rem] px-[1rem] bg-white min-h-screen border-r-[1px] border-gray-200">
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

      <section className="dashboard mb-[2rem]">
        <span className="title text-[1rem] text-black/40">Dashboards</span>
        <div className="cards-container mt-4">
          {dashboards.map((item) => (
            <div
              key={item.name}
              className={`card-container ${
                item.active === true
                  ? "bg-gray-200 px-8 py-2 rounded-[9px]"
                  : ""
              } cursor-pointer flex items-start justify-start mb-3 gap-2`}
            >
              {!item.active && (
                <Image
                  src={"/arrowright.svg"}
                  alt={item.name}
                  width={25}
                  height={30}
                />
              )}

              <div className="link-container flex items-center gap-2">
                <Image src={item.icon} alt={item.name} width={30} height={30} />
                <span className="block text-black transition-all ease-in-out delay-75 hover:translate-x-2">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reports">
        <span className="title text-[1rem] text-black/40">Reports</span>
        <div className="cards-container mt-4">
          {reports.map((item) => (
            <div
              key={item.name}
              className={`card-container ${
                item.icon && item.iconII ? "" : "pl-[2.5rem]"
              } cursor-pointer flex items-start justify-start mb-5 gap-2`}
            >
              {item.iconII && (
                <Image
                  src={item.iconII}
                  alt={item.name}
                  width={25}
                  height={30}
                />
              )}

              <div className="link-container flex items-center gap-2">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                )}

                <span className="block text-black transition-all ease-in-out delay-75 hover:translate-x-2">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RAside;
