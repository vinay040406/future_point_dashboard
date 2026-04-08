"use client";
import Navbar from "@/components/common/Navbar";
import Academic from "@/components/dashboard/Academic";
import Content from "@/components/dashboard/Content";
import FeeStatus from "@/components/dashboard/FeeStatus";
import LogOut from "@/components/dashboard/LogOut";
import Settings from "@/components/dashboard/Settings";
import Sidebar from "@/components/dashboard/Sidebar";
import Notification from "@/components/Notification";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleButtonClick = () => router.push("/dashboard");

  const IsValidUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  useEffect(() => {
    !IsValidUser && router.push("/");
  });

  const getPath = () => {
    if (pathname.includes("notification"))
      return (
        <div className="px-2 sm:p-7.5 w-full  overflow-y-scroll">
          <Notification />
        </div>
      );
    if (pathname.includes("academic")) return <Academic />;
    if (pathname.includes("fee")) return <FeeStatus />;
    if (pathname.includes("settings")) return <Settings />;
    if (pathname.includes("log")) return <LogOut />;
    if (pathname.includes("dash")) return <Content />;
    return (
      <div className="w-full flex items-center justify-center h-full flex-col">
        <span>no route found for {pathname}</span>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-sky-500 text-white rounded-sm my-4 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    );
  };

  return (
    <div className=" w-full bg-dashboard-background h-screen overflow-hidden flex md:grid md:grid-cols-[325px_1fr]">
      <div className="w-25 md:w-full ">
        <Sidebar />
      </div>
      <div className="flex flex-col h-full overflow-y-auto w-full">
        <Navbar />
        {getPath()}
      </div>
    </div>
  );
};

export default page;
