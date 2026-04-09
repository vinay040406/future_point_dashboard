import Icons from "./Icons";
import Image from "next/image";
import Button from "./Button";

const StudentPersonal = ({
  name,
  studentClass,
  phone_no,
  image,
  father_name,
  mother_name,
  email,
  dob,
  address,
  subjects,
}) => {
  return (
    <div className="p-2 sm:p-7.5 bg-white border border-field rounded-2xl flex flex-col 2xl:flex-row gap-4 sm:gap-9 justify-between items-center w-full">
      {image && (
        <Image
          src={image}
          height={498}
          width={483}
          alt={name}
          className="object-cover w-full h-60 sm:h-80 lg:h-124.5 lg:w-120.75 rounded-[10px]"
        />
      )}
      <div className="flex flex-col gap-4 sm:gap-7.5 w-full">
        <div className="flex gap-3 items-center">
          <h5 className="text-xl sm:text-custom-2xl font-semibold text-black leading-150">
            {name}
          </h5>
          <Button
            text={`Class ${studentClass}`}
            className={
              "px-2 sm:px-3.5 py-1 sm:py-1.5 whitespace-nowrap text-blue-main text-xs sm:text-base leading-160 rounded-full bg-light-white"
            }
          />
        </div>
        <div className="flex flex-col gap-6 sm:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6 sm:gap-12">
              <div className="flex gap-3 sm:gap-4.5 items-center">
                <span className="h-12 w-12 md:h-15 md:w-15 lg:h-21.5 lg:w-21.5 rounded-full bg-light-white flex justify-center items-center shrink-0">
                  <Icons
                    icon={"student"}
                    className={"h-7 w-7 lg:h-13.75 lg:w-13.75"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Father Name:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {father_name}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4.5 items-center">
                <span className="h-12 w-12 md:h-15 md:w-15 lg:h-21.5 lg:w-21.5 rounded-full bg-light-white flex justify-center items-center shrink-0">
                  <Icons
                    icon={"phone_No"}
                    className={"h-7 w-7 lg:h-13.75 lg:w-13.75"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Phone No:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {phone_no}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-12">
              <div className="flex gap-3 sm:gap-4.5 items-center">
                <span className="h-12 w-12 md:h-15 md:w-15 lg:h-21.5 lg:w-21.5  rounded-full bg-light-white flex justify-center items-center shrink-0">
                  <Icons
                    icon={"mother"}
                    className={"h-7 w-7 lg:h-13.75 lg:w-13.75"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Mother Name:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {mother_name}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4.5 items-center">
                <span className="h-12 w-12 md:h-15 md:w-15 lg:h-21.5 lg:w-21.5 rounded-full bg-light-white flex justify-center items-center shrink-0">
                  <Icons
                    icon={"email"}
                    className={"h-7 w-7 lg:h-13.75 lg:w-13.75"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Email:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {email}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-12">
              <div className="flex gap-3 sm:gap-4.5 items-center">
                <span className="h-12 w-12 md:h-15 md:w-15 lg:h-21.5 lg:w-21.5 rounded-full bg-light-white flex justify-center items-center shrink-0">
                  <Icons
                    icon={"date_of_birth"}
                    className={"h-7 w-7 lg:h-13.75 lg:w-13.75"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Date of Birth:
                  </span>
                  <span className="font-medium leading-160 text-black text-sm sm:text-base truncate">
                    {dob}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4.5 items-center">
                <span className="h-12 w-12 md:h-15 md:w-15 lg:h-21.5 lg:w-21.5 rounded-full bg-light-white flex justify-center items-center shrink-0">
                  <Icons
                    icon={"address"}
                    className={"h-7 w-7 lg:h-13.75 lg:w-13.75"}
                  />
                </span>
                <div className="flex flex-col gap-0.75 min-w-0">
                  <span className="text-xs sm:text-sm leading-160 text-black">
                    Address:
                  </span>
                  <span className="font-medium whitespace-pre-wrap leading-160 text-black text-sm sm:text-base truncate">
                    {address}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <h4 className="text-black font-medium leading-160 text-xl">
              Subjects:
            </h4>
            <div className="flex flex-wrap gap-3">
              {subjects.map((item, index) => (
                <Button
                  key={index}
                  text={item}
                  className={`text-blue-main py-1.5 ${item.length < 5 ? "px-4 sm:px-7.25" : "px-2 sm:px-3.5"} bg-light-white text-xs sm:text-base  leading-160`}
                />
              ))}
              <Button
                text={"See Daily Schedule"}
                className={
                  "px-2 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-base leading-160 text-blue-main"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPersonal;
