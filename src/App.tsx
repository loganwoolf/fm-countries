import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "./components/grid";
import { Header } from "./components/header";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)")
  );
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((res) => {
        return res.json();
      })
      .then((json) => console.log(json[0]) || setCountries(json))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Grid countries={countries} />
    </>
  );
};
