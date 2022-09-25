import { useState } from "react";
import { Card } from "./card";
import "./grid.css";

export const Grid = (props: { countries: any[] }) => {
  const { countries } = props;
  const [filter, setFilter] = useState("");
  const [region, setRegion] = useState("");

  const regionsSet = new Set();
  countries.forEach((country: any) => regionsSet.add(country.region));
  const regions = Array.from(regionsSet).sort((a, b) => (a < b ? -1 : 1));
  let selectOptions: any[] = [];
  regions.forEach((region) =>
    selectOptions.push(<option value={region}>{region}</option>)
  );

  const cards = countries
    .filter((country) => (region ? country.region === region : true))
    .filter((country) => {
      const name = country.name.official.toLowerCase();
      return name.includes(filter.toLowerCase());
    })
    .sort((a, b) => {
      const x = a.name.official.toLowerCase();
      const y = b.name.official.toLowerCase();
      return x < y ? -1 : 1;
    })
    .map((country) => {
      return <Card {...country} key={country.name.official} />;
    });

  return (
    <>
      <div className="options">
        <input
          className="search"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
        <select
          className="regionFilter"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          {selectOptions}
        </select>
      </div>
      <div className="cards">{cards}</div>
    </>
  );
};
