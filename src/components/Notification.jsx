"use client";
import React, { useState } from "react";
import Icons from "./common/Icons";
import { NOTIFICATION_DATA_LIST } from "@/utils/helper";
import Swal from "sweetalert2";

const Notification = () => {
  const [notifications, setNotifications] = useState(NOTIFICATION_DATA_LIST);
  const [selectedPeriod, setSelectedPeriod] = useState("today");
  const [clearAll, setClearAll] = useState(false);

  const handleClearAll = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You wonna be able to revert this! Just refresh the page.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your holidays has been deleted.",
            icon: "success",
          });
          setNotifications([]);
        } else if (result.dismiss === Swal.DismissReason.cancel)
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your holidays data is safe :)",
            icon: "error",
          });
      })
      .then(setClearAll(true));
  };

  const handleClearOne = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  const filterNotifications = (data, period) => {
    const now = new Date();

    return data.filter((item) => {
      const itemDate = new Date(item.createdAt);

      if (period === "today") {
        return (
          itemDate.getDate() === now.getDate() &&
          itemDate.getMonth() === now.getMonth() &&
          itemDate.getFullYear() === now.getFullYear()
        );
      }

      if (period === "week") {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);

        return itemDate >= startOfWeek && itemDate <= endOfWeek;
      }

      if (period === "month") {
        return (
          itemDate.getMonth() === now.getMonth() &&
          itemDate.getFullYear() === now.getFullYear()
        );
      }

      if (period === "year") {
        return itemDate.getFullYear() === now.getFullYear();
      }

      return true;
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedPeriod(value);
    const filtered = filterNotifications(NOTIFICATION_DATA_LIST, value);
    setNotifications(filtered);
  };
  console.log(selectedPeriod);

  return (
    <>
      {clearAll ? (
        <span className="border-none py-8 sm:py-10 px-4 text-sm sm:text-base text-center">
          No records found
        </span>
      ) : (
        <div className="w-full flex flex-col gap-5 sm:gap-7.5 mt-4 md:mt-0">
          <div className="w-full flex max-[375]:flex-col flex-row gap-4 sm:gap-0 justify-between">
            <button
              onClick={handleClearAll}
              className="border border-blue px-4 sm:px-5.75 py-2.5 sm:py-3.5 flex gap-2 rounded-full cursor-pointer items-center justify-center sm:justify-start w-fit sm:w-auto group hover:bg-blue hover:text-white text-blue duration-300 ease-in
          hover:border-transparent "
            >
              <Icons
                icon={"trash"}
                pathClass={
                  "stroke-blue group-hover:stroke-white duration-300 ease-in"
                }
              />
              <span className="leading-160  text-sm sm:text-base">
                Clear All
              </span>
            </button>

            <div className="relative w-fit sm:w-auto group">
              <select
                value={selectedPeriod}
                onChange={handleChange}
                name="period"
                id="period"
                className={`border border-blue pl-4 pr-6 sm:px-6  py-2.5 sm:py-3.5 rounded-full cursor-pointer leading-160 text-blue outline-none bg-white appearance-none sm:pr-12 w-full sm:w-auto text-sm sm:text-base
            hover:bg-blue hover:text-white duration-300 ease-in
          hover:border-transparent`}
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>

              <Icons
                icon={"dropdown"}
                pathClass={
                  "stroke-blue group-hover:fill-white group-hover:stroke-white duration-300 ease-in"
                }
                className="absolute right-1 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          <div className="w-full rounded-2xl border border-blue/10 flex flex-col overflow-hidden">
            {notifications.length !== 0
              ? notifications.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-b-blue/10 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center justify-between px-4 sm:px-6 py-3 sm:py-4 hover:bg-blue/10 duration-200 ease-in"
                  >
                    <div className="flex flex-col gap-1">
                      <h5 className="text-sm sm:text-custom-base font-semibold text-black leading-160">
                        {item.title}
                      </h5>
                      <span className="text-xs sm:text-sm">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        <b>{item.holidayName}</b>
                      </span>
                    </div>

                    <button
                      onClick={() => handleClearOne(index)}
                      className="flex gap-2 px-4 sm:px-6 py-2.5 sm:py-4 items-center cursor-pointer hover:bg-white rounded-2xl duration-200 ease-in w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <Icons icon={"trash"} pathClass={"stroke-black"} />
                      <span className="text-black leading-160 opacity-70 text-sm sm:text-base">
                        Clear
                      </span>
                    </button>
                  </div>
                ))
              : setClearAll(true)}
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
