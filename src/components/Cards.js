import React from "react";

const Cards = ({ country }) => {
  console.log(country);
  return (
    <li className="card">
      <img src={country.flags.png} alt={country.name.common} />
      <div className="infos">
        <h3>{country.translations.fra.common}</h3>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
      </div>
    </li>
  );
};

export default Cards;
