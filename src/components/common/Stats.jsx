import React from "react";
import Icons from "./Icons";

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 2xl:gap-7.5 bg-white">
      <div className="flex justify-between items-center p-2 sm:p-4.5 border border-field rounded-xl">
        <div className="flex flex-col gap-0.75">
          <h5 className="font-semibold sm:text-xl md:text-2xl lg:text-custom-2xl xl:text-custom-3xl text-blue-main leading-160">
            {stats.totalMarks}
          </h5>
          <span className="text-black leading-160 opacity-70 text-xs sm:text-base">
            Total Marks
          </span>
        </div>
        <span className="h-12 w-12 xl:h-[75.16px] xl:w-[75.16px] hidden sm:flex rounded-full bg-light-white  justify-center items-center shrink-0">
          <Icons className={"xl:h-10.25 xl:w-10.25 w-6 h-6 "} icon={"marks"} />
        </span>
      </div>
      <div className="flex justify-between items-center p-2 sm:p-4.5 border border-field rounded-xl">
        <div className="flex flex-col gap-0.75">
          <h5 className="font-semibold sm:text-xl md:text-2xl lg:text-custom-2xl xl:text-custom-3xl text-blue-main leading-160">
            {stats.attendance}
          </h5>
          <span className="text-black leading-160 opacity-70 text-xs sm:text-base">
            Attendance
          </span>
        </div>
        <span className="h-12 w-12 xl:h-[75.16px] xl:w-[75.16px] hidden sm:flex  rounded-full bg-light-white  justify-center items-center shrink-0">
          <Icons
            className={"xl:h-10.25 xl:w-10.25 w-6 h-6"}
            icon={"attendance"}
          />
        </span>
      </div>
      <div className="flex justify-between items-center p-2 sm:p-4.5 border border-field rounded-xl">
        <div className="flex flex-col gap-0.75">
          <h5 className="font-semibold sm:text-xl md:text-2xl lg:text-custom-2xl xl:text-custom-3xl text-blue-main leading-160">
            {stats.grade}
          </h5>
          <span className="text-black leading-160 opacity-70 text-xs sm:text-base">
            Grade
          </span>
        </div>
        <span className="h-12 w-12 xl:h-[75.16px] xl:w-[75.16px] hidden sm:flex  rounded-full bg-light-white  justify-center items-center shrink-0">
          <Icons className={"xl:h-10.25 xl:w-10.25 w-6 h-6"} icon={"grade"} />
        </span>
      </div>
      <div className="flex justify-between items-center p-2 sm:p-4.5 border border-field rounded-xl">
        <div className="flex flex-col gap-0.75">
          <h5 className="font-semibold sm:text-xl md:text-2xl lg:text-custom-2xl xl:text-custom-3xl text-blue-main leading-160">
            {stats.percentage}
          </h5>
          <span className="text-black leading-160 opacity-70 text-xs sm:text-base">
            Percentage
          </span>
        </div>
        <span className="h-12 w-12 xl:h-[75.16px] xl:w-[75.16px] hidden sm:flex  rounded-full bg-light-white  justify-center items-center shrink-0">
          <Icons
            icon={"percentage"}
            className={"xl:h-10.25 xl:w-10.25 w-6 h-6"}
          />
        </span>
      </div>
    </div>
  );
};

export default Stats;
