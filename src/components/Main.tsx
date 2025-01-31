import Image from "next/image";
import React from "react";

interface MainProps {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const Main = ({ setToggle, toggle }: MainProps) => {
  const itemsArray = [
    {
      name: "Total Products",
      amount: "7,265",
      color: "bg-[#EDEEFC]",
      percentage: "+11.01%",
      icon: "/arrowup.svg",
    },
    {
      name: "Visits",
      amount: "3,671",
      color: "bg-[#E6F1FD]",
      percentage: "-0.03%",
      icon: "/arrowdown.svg",
    },

    {
      name: "New Users",
      amount: "156",
      color: "bg-[#EDEEFC]",
      percentage: "+15.03%",
      icon: "/arrowup.svg",
    },

    {
      name: "Total Users",
      amount: "2,318",
      color: "bg-[#E6F1FD]",
      percentage: "+6.08%",
      icon: "/arrowup.svg",
    },
  ];

  return (
    <main className="bg-white min-h-screen ">
      <nav className="nav-container md:px-[2rem] px-[1rem] py-[1.4rem] border-b-[1px] border-gray-200 flex items-center justify-between">
        <div className="first-item-container flex items-center gap-3  h-full">
          <button onClick={() => setToggle(!toggle)} className="outline-none">
            <Image
              src={"/book.svg"}
              alt="svg-component"
              width={30}
              height={30}
            />
          </button>
          <Image src={"/star.svg"} alt="svg-component" width={30} height={30} />

          <span className="block text-black/40">
            Dashboard /<span className="text-black">Default</span>
          </span>
        </div>
        <div className="second-item-container flex items-center justify-center gap-3">
          <div className="search-input hidden mr-[4rem] px-[.8rem] bg-gray-100 h-[2.5rem] rounded-[6px] md:flex items-center w-full">
            <div className="image-container">
              <Image
                src={"/search.svg"}
                alt="search-icon"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="px-2 placeholder:text-gray-300 bg-transparent border-none outline-none text-[16px]"
            />
            <div className="image-cont">
              <Image
                src={"/search2.svg"}
                alt="search-icon"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="toggle-section flex items-center justify-center gap-4">
            <Image
              src={"/lightbutton.svg"}
              alt="toggle-button-icon"
              width={25}
              height={25}
              className="block"
            />
            <Image
              src={"/timer.svg"}
              alt="search-icon"
              width={25}
              height={25}
              className="md:block hidden"
            />
            <Image
              src={"/notifications.svg"}
              alt="notification toggle-icon"
              width={20}
              height={20}
              className="md:block hidden"
            />
            <Image
              src={"/book.svg"}
              alt="svg-component"
              width={30}
              height={30}
              className="hidden md:block"
            />
          </div>
        </div>
      </nav>

      <div className="main-container md:px-[2rem] px-[1rem] py-[2rem]">
        <section className="overview flex items-center justify-between">
          <span className="block font-semibold md:text-[1.25rem] text-[1rem]">
            Overview
          </span>
          <div className="item-container cursor-pointer flex items-center gap-2">
            <small className="block">Today</small>
            <Image
              src={"/selectarrow.svg"}
              alt="select-arrow"
              width={20}
              height={20}
            />
          </div>
        </section>

        <section className="cards-container flex-wrap mt-[2rem] w-full flex items-start justify-start gap-3 md:flex-row flex-col">
          {itemsArray.map((item) => (
            <div
              key={item.name}
              className={`card-item md:px-[2rem] px-[1.4rem] py-[2.5rem] md:w-[19rem] w-full ${item.color} rounded-[7px]`}
            >
              <span className="block mb-[.8rem] text-[1rem] text-black">
                {item.name}
              </span>
              <div className="flex-container flex items-center justify-between gap-3">
                <span className="block font-bold text-black text-[2rem]">
                  {item.amount}
                </span>

                <div className="arrow-container flex items-center gap-3">
                  <small className="block">{item.percentage}</small>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Main;
