"use client";
import React from "react";
import Heading from "./Heading";
import Icons from "./Icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const IsValidUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  const userName = JSON.parse(IsValidUser);

  const getHeading = () => {
    if (pathname.includes("notification")) return "Notification/Announcement";
    if (pathname.includes("academic")) return "Academic Performance";
    if (pathname.includes("fee")) return "Fee Status";
    if (pathname.includes("settings")) return "Settings";
    if (pathname.includes("log")) return "Log Out";
    if (pathname.includes("dash")) return "Dashboard";
    return "";
  };

  return (
    <div className="flex w-full justify-between items-center border-b border-b-white shadow-[8px_0px_19.1px_0px_rgba(0,75,143,0.05)] px-4 sm:px-7.5 py-4 sm:py-7 gap-4">
      <Heading
        text={getHeading()}
        className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl truncate"}
      />
      <div className="flex gap-4 sm:gap-8.75 items-center shrink-0">
        <Link href={"/dashboard/notification"}>
          <span className="h-10 w-10 sm:h-[58.1px] sm:w-[58.1px] rounded-full bg-light-white flex justify-center items-center cursor-pointer">
            <Icons icon={"notification"} />
          </span>
        </Link>

        <div className="flex gap-2 sm:gap-2.75 items-center">
          <Image
            src={"/images/webp/profile-pic.webp"}
            height={65}
            width={65}
            className="rounded-full shadow-[0px_4.65px_4.65px_0px_rgba(0,75,143,0.16)] h-10 w-10 sm:h-16 sm:w-16"
            alt="profilePic"
          />
          <div className="flex-col hidden sm:flex">
            <h5 className="font-semibold text-custom-base leading-160 text-black">
              {userName?.name}
            </h5>
            <span className="text-sm leading-160 text-blue-main">Parent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
