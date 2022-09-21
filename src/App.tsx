import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header";

export const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {});

  return <Header />;
};
