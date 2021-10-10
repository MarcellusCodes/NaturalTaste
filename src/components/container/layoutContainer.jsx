const LayoutContainer = ({ children }) => {
  return (
    <>
      <div className="p-0 sm:p-3 md:p-5 lg:p-10 bg-white overflow-x-hidden relative">
        {children}
      </div>
    </>
  );
};

export default LayoutContainer;
