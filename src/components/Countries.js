import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]); // Crée un état pour les pays
  // utilise Axios pour importer les pays
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  return (
    <div className="countries">
      <h1>Countries</h1>

      <ul>
        {data.map((country, index) => {
          console.log(index + " " + country.name.common);
          return (
            <li key={index}>
              <h2>{country.name.common}</h2>
              <p>{country.capital}</p>
              <p>{country.region}</p>
              <img src={country.flags.png} alt={country.name.common} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
