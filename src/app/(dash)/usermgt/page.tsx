import Image from "next/image";
import React from "react";

const UserMgt = () => {
  return (
    <div className="page-container md:px-[2rem] px-[1rem]">
      <div className="title-container mt-[2rem] flex items-center justify-between">
        <h1 className="title-text md:text-[1.3rem] text-[1rem] font-semibold">
          User Management
        </h1>

        <div className="toggle-container">
          <Image src={"/toggle.svg"} alt="toggle-icon" width={34} height={34} />
        </div>
      </div>
    </div>
  );
};

export default UserMgt;
