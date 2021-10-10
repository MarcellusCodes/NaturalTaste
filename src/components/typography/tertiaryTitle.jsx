const TertiaryTitle = ({ children, color, className }) => {
  return (
    <>
      <h4
        className={`text-${color} font-bold font-sans text-4xl ${className} mb-4`}
      >
        {children}
      </h4>
    </>
  );
};

export default TertiaryTitle;
