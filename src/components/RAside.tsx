import { useTheme } from "@/ThemeContext";
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
      dark: "/overviewdark.svg",
      active: true,
    },

    {
      name: "User Mgmt",
      icon: "/usermgt.svg",
      active: false,
      dark: "/usermgtdark.svg",
    },
    {
      name: "Listings",
      icon: "/listings.svg",
      dark: "/listingsdark.svg",
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

  const lastBatch = [
    {
      name: "Account",
      icon: "/account.svg",
    },
    {
      name: "Corporate",
      icon: "/corporate.svg",
    },
    {
      name: "Blog",
      icon: "/blog.svg",
    },
    {
      name: "Social",
      icon: "/social.svg",
    },
  ];
  const { theme } = useTheme();

  return (
    <div
      className={`w-full pb-[4rem] md:px-[2rem] px-[1rem] ${
        theme === "dark"
          ? "bg-black/80 border-gray-600"
          : "bg-white border-gray-200"
      } min-h-screen border-r-[1px] border-gray-200`}
    >
      <section className="logo-container py-[1.4rem] flex items-center gap-3">
        <Image
          className="object-cover rounded-full"
          src={"/Frame.png"}
          alt="user-image"
          width={50}
          height={50}
        />

        <span
          className={`block  ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          Prelura
        </span>
      </section>

      <div className="button-flex-container mt-[1rem] flex items-center gap-4">
        <button
          className={` ${
            theme === "dark" ? "text-white/40" : "text-black/40"
          } text-[1rem]`}
        >
          Favorites
        </button>
        <button
          className={`text-[1rem] ${
            theme === "dark" ? "text-white/20" : "text-black/20"
          }`}
        >
          Recent
        </button>
      </div>

      <section className="listings flex items-start justify-start gap-3 flex-col w-full mt-[1.5rem] mb-[2.5rem]">
        {listing.map(({ name }) => (
          <div
            key={name}
            className="item-card cursor-pointer w-[12rem] py-[.6rem] rounded-[15px] flex items-center"
          >
            <Image
              src={theme === "light" ? "/dot.svg" : "/dotdark.svg"}
              alt="dot-icon"
              width={30}
              height={30}
            />
            <span
              className={`block ${
                theme === "light" ? "text-black" : "text-white"
              }  transition-all ease-in-out delay-75 hover:translate-x-2`}
            >
              {name}
            </span>
          </div>
        ))}
      </section>

      <section className="dashboard mb-[2rem]">
        <span
          className={`title text-[1rem]  ${
            theme === "light" ? "text-black/40" : "text-white/40"
          }`}
        >
          Dashboards
        </span>
        <div className=" mt-4">
          {dashboards.map((item) => (
            <div
              key={item.name}
              className={` ${
                item.active === true
                  ? ` ${
                      theme === "dark" ? "bg-white/10" : "bg-gray-200"
                    } px-8 py-2 rounded-[9px]`
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
                <Image
                  src={theme === "light" ? item.icon : item.dark}
                  alt={item.name}
                  width={30}
                  height={30}
                />
                <span
                  className={`block  ${
                    theme === "light" ? "text-black" : "text-white"
                  } transition-all ease-in-out delay-75 hover:translate-x-2`}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reports">
        <span
          className={`title text-[1rem]  ${
            theme === "light" ? "text-black/40" : "text-white/40"
          }`}
        >
          Reports
        </span>
        <div className=" mt-4">
          {reports.map((item) => (
            <div
              key={item.name}
              className={` ${
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

                <span
                  className={`block  transition-all ease-in-out ${
                    theme === "dark" ? "text-white" : "text-black"
                  } delay-75 hover:translate-x-2`}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" mt-[4rem]">
        {lastBatch.map((item) => (
          <div
            key={item.name}
            className={` cursor-pointer flex items-start justify-start mb-3 gap-2`}
          >
            <Image
              src={
                theme === "light" ? "/arrowright.svg" : "/arrowrightdark.svg"
              }
              alt={item.name}
              width={25}
              height={30}
            />

            <div className="link-container flex items-center gap-2">
              <Image src={item.icon} alt={item.name} width={30} height={30} />
              <span
                className={`block  ${
                  theme === "dark" ? "text-white" : "text-black"
                } transition-all ease-in-out delay-75 hover:translate-x-2`}
              >
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="company-logo-container flex items-center gap-2 mt-[10rem]">
        <Image
          src={"/plerula.svg"}
          alt="company-logo-icon"
          width={35}
          height={35}
        />

        <span
          className={`block  ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Plerula 2025
        </span>
      </section>
    </div>
  );
};

export default RAside;
