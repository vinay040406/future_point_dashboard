const Button = ({ text, className }) => {
  return (
    <button
      className={`${className} cursor-pointer border border-blue-main rounded-full hover:scale-105 duration-200 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
