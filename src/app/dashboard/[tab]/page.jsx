"use client";
import Navbar from "@/components/common/Navbar";
import Academic from "@/components/dashboard/Academic";
import Content from "@/components/dashboard/Content";
import FeeStatus from "@/components/dashboard/FeeStatus";
import Settings from "@/components/dashboard/Settings";
import Sidebar from "@/components/dashboard/Sidebar";
import Notification from "@/components/Notification";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  const params = useParams();
  const tab = params.tab;
  const handleButtonClick = () => router.push("/dashboard");

  const IsValidUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  useEffect(() => {
    if (!IsValidUser) {
      router.push("/");
    }
  }, [IsValidUser]);

  const getPath = () => {
    switch (tab) {
      case "notification":
        return (
          <div className="px-2 sm:p-7.5 w-full overflow-y-scroll">
            <Notification />
          </div>
        );

      case "academic-performance":
        return <Academic />;

      case "fee-status":
        return <FeeStatus />;

      case "settings":
        return <Settings />;

      case "dash":
        return <Content />;

      default:
        return (
          <div className="w-full flex items-center justify-center h-full flex-col">
            <span>no route found for {tab}</span>
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 bg-sky-500 text-white rounded-sm my-4 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        );
    }
  };

  return (
    <div className=" w-full bg-dashboard-background h-screen overflow-hidden flex md:grid md:grid-cols-[325px_1fr]">
      <div className="w-15 md:w-full ">
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
