const Heading = ({ text, className }) => {
  return (
    <h3 className={`${className} leading-130 font-semibold text-black`}>
      {text}
    </h3>
  );
};

export default Heading;
