const SecondaryTitle = ({ children, color, className }) => {
  return (
    <>
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-${color} ${className}`}
      >
        {children}
      </h2>
    </>
  );
};

export default SecondaryTitle;
