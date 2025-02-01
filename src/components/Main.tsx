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
    <main className="bg-white min-h-screen">
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
        <div className="second-item-container  hidden md:flex items-center justify-center gap-3">
          <div className="search-input mr-[4rem] px-[.8rem] bg-gray-100 h-[2.5rem] rounded-[6px] flex items-center w-full">
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
            />
            <Image
              src={"/timer.svg"}
              alt="search-icon"
              width={25}
              height={25}
            />
            <Image
              src={"/notifications.svg"}
              alt="notification toggle-icon"
              width={20}
              height={20}
            />
            <Image
              src={"/book.svg"}
              alt="svg-component"
              width={30}
              height={30}
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

        <section className="cards-container flex-wrap mt-[2rem] w-full flex items-start justify-between gap-5 md:flex-row flex-col">
          {itemsArray.map((item) => (
            <div
              key={item.name}
              className={`card-item md:px-[2rem] px-[1.4rem] md:py-[2rem] py-[1.5rem] ${item.color} rounded-[23px]`}
              style={{ flex: "1 1 250px", minWidth: "250px", width: "100%" }} // Full width on mobile, individual width on larger screens
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

        <section className="chart-section mt-[4rem]">
          <div className="first-chart-section flex items-start justify-between md:flex-row flex-col">
            <div className="card-container py-5 px-6 block min-h-[25rem] md:w-[74%] w-full rounded-[13px] bg-gray-100">
              <div className="title-container flex items-start gap-3">
                <small className="block font-bold text-[1rem]">
                  Total Users
                </small>
                <small className="block text-[1rem] text-black/40">
                  Total Listings
                </small>
                <span className="block text-gray-300">|</span>
                <div className="text-container flex items-center gap-1">
                  <Image
                    src={"/today.svg"}
                    alt="time-icon"
                    width={29}
                    height={29}
                  />

                  <span className="block text-[.8rem] text-black">Today</span>
                </div>
                <div className="text-container flex items-center gap-1">
                  <Image
                    src={"/thismonth.svg"}
                    alt="time-icon"
                    width={29}
                    height={29}
                  />

                  <span className="block text-[.8rem] text-black">
                    This Month
                  </span>
                </div>
              </div>
            </div>
            <div className="card-container py-5 px-6 block min-h-[25rem] md:w-[24%] w-full rounded-[13px] bg-gray-100">
              <small className="block font-bold text-[1rem]">
                Traffic by Website
              </small>
            </div>
          </div>

          <div className="second-chart-section mt-[4rem] flex items-start justify-between md:flex-row flex-col">
            <div className="card-container py-5 px-6 block min-h-[25rem] md:w-[34%] w-full rounded-[13px] bg-gray-100">
              <div className="title-container flex items-start gap-3">
                <small className="block font-bold text-[1rem]">
                  Traffic by Device
                </small>
              </div>
            </div>
            <div className="card-container block min-h-[25rem] md:w-[64%] w-full rounded-[13px] bg-gray-100"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
