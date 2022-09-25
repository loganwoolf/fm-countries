export const Card = (props) => {
  const { population, region, capital } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.flags.png} alt={`Flag of ${props.name.official}`} />
      </div>
      <div className="card-content">
        <h3>{props.name.official}</h3>
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
              Capital: <span>{capital}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
