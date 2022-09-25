import { Card } from "./card";
import "./grid.css";

export const Grid = (props) => {
  const cards = props.countries.map((country) => {
    return <Card {...country} />;
  });

  return <div className="cards">{cards}</div>;
};
