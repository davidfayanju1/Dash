import Image from "next/image";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  FontSpec,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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

  const traffic = [
    {
      name: "Google",
      icon: "/google.svg",
    },
    {
      name: "Youtube",
      icon: "/youtube.svg",
    },
    {
      name: "Instagram",
      icon: "/instagram.svg",
    },
    {
      name: "Pinterest",
      icon: "/pinterest.svg",
    },
    {
      name: "Facebook",
      icon: "/facebook.svg",
    },
    {
      name: "Twitter",
      icon: "/twitter.svg",
    },
  ];

  const [chartData] = useState({
    labels: ["Linux", "Mac", "IOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic by Device",
        data: [15000, 40000, 20000, 35000, 5000, 27000],
        backgroundColor: [
          "#9F9FF8",
          "#96E2D6",
          "#000000",
          "#92BFFF",
          "#AEC7ED",
          "#94E9B8",
        ],
        borderWidth: 0,
        borderRadius: 13,
      },
    ],
  });

  const [pieData] = useState({
    labels: ["Linux", "Mac", "IOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Traffic by Location",
        data: [15000, 40000, 20000, 35000, 5000, 27000],
        backgroundColor: [
          "#9F9FF8",
          "#96E2D6",
          "#000000",
          "#92BFFF",
          "#AEC7ED",
          "#94E9B8",
        ],
        borderWidth: 0,
        borderRadius: 13,
      },
    ],
  });

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Traffic by Location",
        font: {
          family: "Arial",
          size: 16,
          style: "normal",
          weight: "bold",
        },
        color: "#000000",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
  };

  const pieChartContainerStyle = {
    width: "100%",
    height: "350px", // Set a larger height for a bigger Pie Chart
    backgroundColor: "transparent",
  };

  type ChartOptions = {
    responsive: boolean;
    maintainAspectRatio: boolean;
    scales: {
      x: {
        grid: {
          display: boolean; // Remove gridlines on the x-axis
        };
      };
      y: {
        grid: {
          display: boolean; // Remove gridlines on the y-axis
        };
      };
    };
    plugins: {
      title: {
        display: boolean;
        text: string;
        align: "start" | "center" | "end" | undefined;
        font: Partial<FontSpec>;
        color: string;
        padding: {
          top: number;
          bottom: number;
        };
      };
      legend: {
        display: boolean;
      };
    };
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Remove gridlines on the x-axis
        },
      },
      y: {
        grid: {
          display: false, // Remove gridlines on the y-axis
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Traffic by Device",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
          style: "normal",
          family: "Arial",
        } as any,
        color: "#000000",
        padding: {
          top: 10,
          bottom: 50,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  const chartContainerStyle = {
    width: "100%",
    minHeight: "300px", // Set minimum height to ensure visibility
  };

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
              className={`card-item md:px-[2rem] items-center justify-center px-[1.4rem] md:py-[2rem] py-[2rem] ${item.color} rounded-[23px]`}
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
            <div className="card-container mb-5 py-5 px-6 block min-h-[25rem] md:w-[74%] w-full rounded-[13px] bg-gray-100">
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

              <div className="flex-container mt-[1rem]">
                <div className="">
                  {traffic.map((item) => (
                    <div
                      key={item.name}
                      className="item-card flex items-center gap-4 mb-[1.5rem]"
                    >
                      <span className="block">{item.name}</span>

                      <div className="icon-container">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={120}
                          height={80}
                          className=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="second-chart-section mt-[4rem] flex items-start justify-between md:flex-row flex-col">
            <div className="card-container mb-5 py-5 px-6 block min-h-[25rem] md:w-[34%] w-full rounded-[13px] bg-gray-100">
              <div className="title-container">
                <div style={chartContainerStyle}>
                  <Bar data={chartData} options={options} />
                </div>
              </div>
            </div>
            <div className="card-container py-5 px-6 block min-h-[25rem] md:w-[64%] w-full rounded-[13px] bg-gray-100">
              <div className="title-container flex items-start gap-3">
                <div style={pieChartContainerStyle}>
                  <Doughnut data={pieData} options={pieOptions} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
