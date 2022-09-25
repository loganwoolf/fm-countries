export const StyleSwitch = (props) => {
  const { darkMode, setDarkTheme } = props;

  const swapTheme = () => {
    if (darkMode.matches) {
      document.body.classList.toggle("light-theme");
    } else {
      document.body.classList.toggle("dark-theme");
    }
  };

  return (
    <button onClick={swapTheme}>
      {darkMode ? "🌙 Dark Mode" : "🔆 Light Mode"}
    </button>
  );
};
