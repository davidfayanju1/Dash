"use client";

import { gql, useMutation } from "@apollo/client";
import LAside from "@/components/LAside";
import Main from "@/components/Main";
import RAside from "@/components/RAside";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LOGOUT_MUTATION = gql`
  mutation logout($refreshToken: String!) {
    logout(refreshToken: $refreshToken) {
      message
    }
  }
`;

const Home = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleRight, setToggleRight] = useState<boolean>(false);
  const router = useRouter();
  const token = localStorage.getItem("refreshToken") || null;

  console.log(token, "refreshToken");

  const [logout, { loading }] = useMutation(LOGOUT_MUTATION);

  useEffect(() => {
    if (!token) {
      toast.error("User not logged in");
      router.push("/login");
    }
  }, [token, router]);

  const handleLogout = async () => {
    try {
      await logout({ variables: { refreshToken: JSON.parse(token ?? "") } });
      localStorage.removeItem("refreshToken");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed");
      console.log(error, "error");
    }
  };

  return (
    <>
      <div
        className={`dash-container min-h-screen flex items-start justify-center relative`}
      >
        {/* Sidebar for larger screens */}
        <div className="aside-container w-[16rem] h-screen overflow-y-scroll no-scrollbar fixed z-50 top-0 left-0 lg:block hidden">
          <RAside onLogout={handleLogout} loading={loading} />
        </div>

        {/* Overlay and Animated Sidebar for mobile */}
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black xl:hidden"
            onClick={() => setToggle(false)}
          />
        )}
        <motion.div
          initial={{ x: "-100%" }} // Start off-screen to the left
          animate={{ x: toggle ? 0 : "-100%" }} // Animate to visible or hidden
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }} // Set the duration and easing of the animation
          className="aside-container overflow-y-scroll w-[16rem] h-screen no-scrollbar fixed top-0 left-0 block xl:hidden"
        >
          <RAside onLogout={handleLogout} loading={loading} />
        </motion.div>

        <div className="flex-container ml-0 lg:ml-[16rem] min-h-screen w-full flex items-start justify-start md:flex-row flex-col">
          <div className="w-full lg:w-[calc(100%-16rem)] xl:w-[calc(100%-16rem)] min-h-[100vh]">
            <Main
              setToggle={setToggle}
              toggle={toggle}
              setToggleRight={setToggleRight}
            />
          </div>
          <div className="fixed overflow-y-scroll top-0 right-0 custom:block hidden w-[16rem] h-screen no-scrollbar">
            <LAside />
          </div>
        </div>

        {/* Overlay and Animated Sidebar for mobile (LAside) */}
        {toggleRight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black xl:hidden"
            onClick={() => setToggleRight(false)}
          />
        )}
        <motion.div
          initial={{ x: "100%" }} // Start off-screen to the right
          animate={{ x: toggleRight ? 0 : "100%" }} // Animate to visible or hidden
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }} // Set the duration and easing of the animation
          className="aside-container overflow-y-scroll w-[16rem] h-screen no-scrollbar fixed top-0 right-0 block xl:hidden"
        >
          <LAside />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
