import React, { useState } from "react";
import Icons from "./common/Icons";

const ExamScore = ({ examData }) => {
  const [selectedTerm, setSelectedTerm] = useState("1st Term Exam Result");
  return (
    <div className="border rounded-2xl border-field overflow-hidden">
      <div className="flex justify-between flex-col gap-2 sm:flex-row items-center px-4 sm:px-6 py-7">
        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black">
          {selectedTerm.replace("Result", "")}Score
        </h3>
        <div className="relative">
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="border border-blue-main px-2.5 sm:px-3.5 py-1.5 rounded-full cursor-pointer text-blue-main outline-none bg-white appearance-none pr-10 sm:pr-12 text-xs sm:text-base"
          >
            <option value="1st Term Exam Result">1st Term Exam Result</option>
            <option value="2nd Term Exam Result">2nd Term Exam Result</option>
            <option value="3rd Term Exam Result">3rd Term Exam Result</option>
          </select>
          <Icons
            icon={"dropdown"}
            className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-main"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full 2xl:min-h-122.5">
          <thead className="">
            <tr className="bg-blue-main text-white uppercase h-14.5 text-sm sm:text-base ">
              <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold tracking-wider">
                Exam
              </th>
              <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold ">
                Total Marks
              </th>
              <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold ">
                Marks
              </th>
              <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold">
                Status
              </th>
              <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold ">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="">
            {examData.map((exam, i) => (
              <tr
                key={i}
                className="border-b border-blue-main/10 last:border-none lg:h-18  text-xs sm:text-base"
              >
                <td className="px-4 sm:px-6 py-3 sm:py-5  text-black">
                  {exam.subject}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-5 opacity-70 text-black">
                  {exam.total}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-5 opacity-70 text-black">
                  {exam.marks}
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-5 ">
                  <span
                    className={`opacity-70 ${exam.status === "Pass" ? "text-green" : "text-red-500"}`}
                  >
                    {exam.status}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-3 sm:py-5  text-black">
                  {exam.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamScore;
