import React from "react";

const Cards = ({ country }) => {
  console.log(country);
  return (
    <li className="card">
      <img
        src={country.flags.png}
        alt={"Drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h3>{country.translations.fra.common}</h3>
        <p>Capital: {country.capital}</p>
        <p>Pop : {country.population.toLocaleString("fr-FR")}</p>
      </div>
    </li>
  );
};

export default Cards;
