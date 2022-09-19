import { useState } from "react";
import "./header.css";
import { StyleSwitch } from "./styleSwitch";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const swapMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <header className={`header ${darkMode && "dark"}`}>
      <h1>Where In The World?</h1>
      <StyleSwitch onClick={swapMode} darkMode={darkMode} />
    </header>
  );
};
