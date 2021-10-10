const WavyText = ({ children, color }) => {
  return (
    <span style={{ textDecoration: `underline wavy ${color}` }}>
      {children}
    </span>
  );
};

export default WavyText;
