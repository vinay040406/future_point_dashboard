"use client";
import { STUDENT_DATA_LIST } from "@/utils/helper";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Stats from "../common/Stats";
import StudentPersonal from "../common/StudentPersonal";
import ExamScore from "../ExamScore";
import TeacherFeedback from "../TeacherFeedback";
import Image from "next/image";

function Academic() {
  const [student, setStudent] = useState(null);
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (!tab) return;
    const found = STUDENT_DATA_LIST.find(
      (item) => tab === item.name.replaceAll(" ", "-").toLowerCase(),
    );
    setStudent(found || null);
  }, [tab]);

  if (!student) {
    return <div className="p-5">No student found</div>;
  }

  const {
    name,
    class: studentClass,
    phone_no,
    image,
    stats,
    father_name,
    mother_name,
    email,
    dob,
    address,
    subjects,
    examData,
    teacherFeedback,
  } = student;

  return (
    <div className="p-4 sm:p-7.5 w-full flex flex-col gap-4 sm:gap-7.5 overflow-y-auto h-full">
      <div className="w-full">
        <Stats stats={stats} />
      </div>
      <StudentPersonal
        name={name}
        studentClass={studentClass}
        phone_no={phone_no}
        image={image}
        father_name={father_name}
        mother_name={mother_name}
        email={email}
        dob={dob}
        address={address}
        subjects={subjects}
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4 sm:gap-7.5">
        <ExamScore examData={examData} />
        <div className="flex flex-col gap-4 sm:gap-7.5">
          <h5 className="text-black text-xl sm:text-2xl font-semibold leading-130">
            Attendance Data
          </h5>
          <div className="border border-field rounded-2xl">
            <Image
              src={"/images/webp/attendance-chart.webp"}
              width={752}
              height={516}
              alt="attendance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <TeacherFeedback teacherFeedback={teacherFeedback} />
    </div>
  );
}

export default Academic;
