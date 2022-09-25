import "../index.css";
import { Card } from "./card";
console.log({});
const country = {
  flags: { png: "https://flagcdn.com/w320/as.png" },
  name: { official: "American Samoa" },
  population: 55197,
  region: "Oceania",
  Capital: ["Pago Pago"],
};

export const Loading = () => <Card {...country} key={country.name.official} />;
