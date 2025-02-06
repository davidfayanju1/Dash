"use client";
import TableComp from "@/components/reusable/TableComp";
import { useTheme } from "@/ThemeContext";
import Image from "next/image";
import React from "react";
import DataTable from "react-data-table-component";

const UserMgt = () => {
  const columns = [
    {
      name: "Username",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Date Joined",
      selector: (row: any) => row.year,
      sortable: true,
    },

    {
      name: "Listings",
      selector: (row: any) => row.listings,
      sortable: true,
    },

    {
      name: "Listings(Lifetime)",
      selector: (row: any) => row.listingsLifetime,
      sortable: true,
    },
    {
      name: "Total made",
      selector: (row: any) => row.totalMade,
      sortable: true,
    },
    {
      name: "Shop Value",
      selector: (row: any) => row.shopValue,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "ByeWind",
      year: "Jun 24, 2025",
      listings: "15",
      listingsLifetime: "947",
      totalMade: "$300.00",
      shopValue: "$500.00",
    },

    {
      id: 2,
      title: "Natalie Craig",
      year: "Mar 10, 2025",
      listings: "25",
      listingsLifetime: "47",
      totalMade: "$881.00",
      shopValue: "$1025.00",
    },
    {
      id: 3,
      title: "Drew Cano",
      year: "Nov 10, 2025",
      listings: "35",
      listingsLifetime: "102",
      totalMade: "$409.00",
      shopValue: "$750.00",
    },
    // Add more data here
  ];

  const { theme } = useTheme();

  return (
    <div
      className={`page-container md:px-[2rem] px-[1rem] h-screen  ${
        theme === "dark" ? "bg-black/80" : "bg-white"
      }`}
    >
      <div className="title-container mb-[2rem] pt-[2rem] flex items-center justify-between">
        <h1
          className={`title-text md:text-[1.3rem] text-[1rem] ${
            theme === "light" ? "text-black" : "text-white"
          } font-semibold`}
        >
          User Management
        </h1>

        <div className="toggle-container">
          <Image src={"/toggle.svg"} alt="toggle-icon" width={34} height={34} />
        </div>
      </div>

      <div className="table-container">
        <TableComp columns={columns} data={data} />
      </div>
    </div>
  );
};

export default UserMgt;
