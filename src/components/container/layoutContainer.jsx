const LayoutContainer = ({ children }) => {
  return (
    <>
      <div className="px-10 pt-10 bg-white overflow-x-hidden relative">
        {children}
      </div>
    </>
  );
};

export default LayoutContainer;
