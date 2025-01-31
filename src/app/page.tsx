import LAside from "@/components/LAside";
import Main from "@/components/Main";
import RAside from "@/components/RAside";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dash-container min-h-screen bg-gray-300 flex items-start justify-center">
      <div className="aside-container w-[16rem] h-screen fixed top-0 left-0 md:block hidden">
        <RAside />
      </div>
      <div className="flex-container ml-0 md:ml-[16rem] min-h-screen w-full flex items-start justify-start md:flex-row flex-col">
        <div className="md:w-[80%] w-full">
          <Main />
        </div>
        <div className="md:w-[20%] w-full">
          <LAside />
        </div>
      </div>
    </div>
  );
}
