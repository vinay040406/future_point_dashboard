"use client";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href={"/dashboard/dash"}>
        <button className="px-4 py-2 bg-blue-main w-fit text-white rounded-sm cursor-pointer">
          Go To Dashboard
        </button>
      </Link>
    </div>
  );
};

export default page;
