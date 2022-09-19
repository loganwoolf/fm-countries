export const StyleSwitch = (props: { onClick: any; darkMode: boolean }) => {
  const { onClick, darkMode } = props;
  return (
    <button onClick={onClick}>
      {darkMode ? "🌙 Dark Mode" : "🔆 Light Mode"}
    </button>
  );
};
