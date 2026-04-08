import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import { STUDENT_DATA_LIST } from "@/utils/helper";
import Icons from "../common/Icons";

const Content = () => {
  const IsValidUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  const usernName = JSON.parse(IsValidUser);

  return (
    <div className="w-full overflow-y-auto h-full p-4 sm:p-7.5 flex flex-col gap-4 sm:gap-7.5">
      <div
        style={{
          backgroundImage: `url('/images/webp/content-bg-layer.webp')`,
        }}
        className="bg-cover bg-center bg-blue-main w-full px-6 md:pl-13.75 rounded-2xl flex flex-row justify-between items-center lg:text-left
          overflow-hidden min-h-45 sm:min-h-69.25"
      >
        <div className="flex flex-col gap-1.5 w-full py-6">
          <span className="leading-100 text-sm sm:text-xl text-original-white/80">
            September 6, 2023
          </span>
          <h1 className="text-xl sm:text-custom-4xl font-semibold leading-130 text-white">
            Welcome, {usernName.name}!
          </h1>
          <p className="leading-160 text-sm sm:text-base text-original-white/80">
            Always stay updated in your Parent portal.
          </p>
        </div>
        <div className="relative h-32 sm:h-68.5 w-32 sm:w-full sm:max-w-193.25 shrink-0 hidden lg:block">
          <Image
            src={"/images/webp/main-group-image.webp"}
            fill
            alt="xyz"
            className="object-contain "
          />
        </div>
      </div>

      <Heading text={"My Students"} className={"text-xl sm:text-custom-2xl"} />

      <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
        {STUDENT_DATA_LIST.map((item, index) => (
          <div
            key={index}
            className="border group border-blue-main/20 shadow-[0px_0px_30.4px_0px_rgba(3,77,144,0.14)] flex flex-col sm:flex-row gap-4 items-start p-4 sm:p-5 rounded-2xl w-full sm:w-auto sm:min-w-124 h-auto sm:h-64.5"
          >
            <div className="shrink-0 h-40 w-full sm:h-full sm:w-auto sm:min-h-54.5">
              <Image
                src={item.image}
                height={218}
                width={226}
                alt={item.name}
                className="object-cover object-center rounded-[10px] h-full w-full sm:h-full sm:w-56 group-hover:scale-103 hover:scale-[95%] duration-200 ease-in"
              />
            </div>

            <div className="flex flex-col gap-3 sm:gap-5 flex-1 min-w-0">
              <div className="flex gap-3 items-center">
                <span className="h-7 md:h-9 w-7 md:w-9 sm:h-12 sm:w-12 rounded-full bg-[#7D80E01A] flex items-center justify-center shrink-0">
                  <Icons
                    icon={"student"}
                    className={"h-5 w-5 md:h-full md:w-full"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Student Name:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {item.name}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <span className="h-7 md:h-9 w-7 md:w-9 sm:h-12 sm:w-12 rounded-full bg-[#7D80E01A] flex items-center justify-center shrink-0">
                  <Icons
                    icon={"class"}
                    className={"h-5 w-5 md:h-full md:w-full"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Class:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {item.class}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <span className="h-7 md:h-9 w-7 md:w-9  sm:h-12 sm:w-12 rounded-full bg-[#7D80E01A] flex items-center justify-center shrink-0">
                  <Icons
                    icon={"phone_No"}
                    className={"h-5 w-5 md:h-full md:w-full"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Phone No:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {item.phone_no}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
