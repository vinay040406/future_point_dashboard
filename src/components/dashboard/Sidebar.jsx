import { SIDEBAR_DATA } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "../common/Icons";
import { useParams } from "next/navigation";

const Sidebar = () => {
  const params = useParams();
  const tab = params.tab;

  return (
    <div className="w-full flex flex-col gap-10 h-screen overflow-y-auto rounded-r-2xl shadow-[8px_0px_19.1px_0px_rgba(0,75,143,0.05)] pt-4 pb-6 px-2 md:px-6">
      <Link href={"/dashboard/dash"}>
        <Image
          src={"/images/webp/logo.webp"}
          width={215}
          height={55}
          alt="logo"
          className="md:block hidden"
        />
        <Image
          src={"/images/webp/logo-sm.webp"}
          width={56}
          height={55}
          alt="logo"
          className="block md:hidden"
        />
      </Link>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1 border-b border-b-sidebar-links-border pb-5">
          {SIDEBAR_DATA.slice(0, 3).map((item, index) => (
            <Link
              key={index}
              href={
                item.href === "/dashboard/academic-performance"
                  ? "/dashboard/dash"
                  : item.href
              }
            >
              <div
                className={`flex gap-3 px-2 md:px-4 py-1.5 md:py-3 rounded-xl md:rounded-full group items-center cursor-pointer ${tab === `${item.href.split("/").pop()}` && "bg-blue text-white"} hover:bg-blue hover:text-white duration-200 ease-in `}
              >
                <Icons
                  icon={item.icon}
                  className={"duration-200 ease in"}
                  pathClass={`${item.icon === "dashboard" && "stroke-grey"} group-hover:stroke-white group-hover:stroke-white ${tab === item.href.split("/").pop() && "stroke-white"}`}
                />
                <span className="md:block hidden">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {SIDEBAR_DATA.slice(3, 5).map((item, index) => (
            <Link key={index} href={item?.href}>
              <div
                className={`flex gap-3 px-2 md:px-4 py-1.5 md:py-3 rounded-2xl md:rounded-full group items-center cursor-pointer text-grey ${item.text === "Log Out" ? "text-red hover:bg-red hover:text-white" : "text-grey hover:bg-blue hover:text-white "} duration-200 ease-in ${
                  tab === item.href?.split("/").pop() && "bg-blue text-white"
                }`}
              >
                <Icons
                  icon={item.icon}
                  className={"duration-200 ease in"}
                  pathClass={`group-hover:stroke-white group-hover:stroke-white  ${tab === item.href?.split("/").pop() && "stroke-white"}`}
                />
                <span className={`font-medium leading-160 md:block hidden`}>
                  {item.text}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
