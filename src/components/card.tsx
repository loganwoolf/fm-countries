import "./card.css";

export const Card = (props) => {
  const { flags, name, population, region, capital } = props;
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${flags.png}` }}
      >
        {/* <img src={flags.png} alt={`Flag of ${name.official}`} /> */}
      </div>
      <div className="card-content">
        <h3>{name.official}</h3>
        <ul className="card-stats">
          <li>
            <p>
              Population: <span>{population}</span>
            </p>
          </li>
          <li>
            <p>
              Region: <span>{region}</span>
            </p>
          </li>
          <li>
            <p>
              Capital: <span>{capital || "None"}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
