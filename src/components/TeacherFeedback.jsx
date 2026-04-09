const TeacherFeedback = ({ teacherFeedback }) => {
  return (
    <div className="p-2 sm:p-6 bg-light-white max-w-296.5 w-full rounded-2xl border border-blue/20 flex flex-col gap-2 sm:gap-4">
      <div className="flex flex-col gap-1 sm:gap-4">
        <h4 className="font-semibold text-black text-xl sm:text-2xl leading-130">
          Teacher Feedback:
        </h4>
        <p className="opacity-70 text-black leading-160 text-xs sm:text-base">
          {teacherFeedback.description}
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 ml-4">
        {teacherFeedback.points.map((item, index) => (
          <li key={index}>
            <h5 className="flex flex-wrap text-blue-main font-semibold text-sm sm:text-base">
              {item.title}:
              <p className="text-xs sm:text-base text-black font-normal whitespace-pre-wrap">
                {" "}
                {item.text}
              </p>
            </h5>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TeacherFeedback;
