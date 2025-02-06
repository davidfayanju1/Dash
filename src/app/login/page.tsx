"use client";

import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Loginpage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    password: "",
    text: "",
  });

  const handleChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="bg-[#AB28B2]/50 w-full min-h-screen flex items-center justify-center">
      <div className="page-items-container mx-auto my-[5rem] max-w-[31rem] w-[97%] min-h-[35rem]">
        <h1 className="font-semibold mb-2 text-[1rem] text-black">
          Admin Login
        </h1>
        <div className="box shadow-xl md:py-[3.5rem] py-[2.5rem] px-[1rem] md:px-[2rem] mb-[4rem] bg-white w-[100%] min-h-[30rem] rounded-[9px]">
          <Input
            type="text"
            placeholder=""
            label="Username"
            handleChangeText={handleChangeText}
            value={user.username}
            containerStyle="mb-[2rem]"
          />

          <Input
            type="text"
            placeholder=""
            label="Password"
            handleChangeText={handleChangeText}
            value={user.password}
            containerStyle="mb-[2rem]"
            password
          />

          <Input
            type="text"
            placeholder=""
            label="Enter Text"
            handleChangeText={handleChangeText}
            value={user.text}
            containerStyle="mb-[2rem]"
          />

          <div className="button-container">
            <button
              onClick={handleLogin}
              className="bg-[#AB28B2] mb-[1.5rem] text-white font-semibold py-[.9rem] w-full rounded-[7px]"
            >
              Login
            </button>

            <Link
              href={"/forgot-password"}
              className="text-center block text-[#AB28B2] text-[.8rem]"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <section className="company-logo-container flex justify-center items-center gap-2 mt-[10rem]">
          <Image
            src={"/plerula.svg"}
            alt="company-logo-icon"
            width={35}
            height={35}
          />

          <span className={`block text-white`}>Plerula 2025</span>
        </section>
      </div>
    </div>
  );
};

export default Loginpage;
