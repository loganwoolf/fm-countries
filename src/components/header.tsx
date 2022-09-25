import "./header.css";
import { StyleSwitch } from "./styleSwitch";

export const Header = (props) => {
  return (
    <header className="header">
      <h1>Where In The World?</h1>
      <StyleSwitch
        darkMode={props.darkTheme}
        setDarkTheme={props.setDarkTheme}
      />
    </header>
  );
};
