const PrimaryTitle = ({ children, color, className }) => {
  return (
    <>
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-${color} ${className}`}
      >
        {children}
      </h1>
    </>
  );
};

export default PrimaryTitle;
