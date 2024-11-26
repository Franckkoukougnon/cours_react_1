import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Countries = () => {
  const [data, setData] = useState([]); // Crée un état pour les pays
  const [loading, setLoading] = useState(true); // Crée un état pour le chargement
  const [rangeValue, setRangeValue] = useState(20); // Crée un état pour la valeur du range
  const continent = ["Africa", "Europe", "Asia", "Oceania", "America"];
  const [selectedRadio, setSelectedRadio] = useState("");

  // utilise Axios pour importer les pays
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Chargement des pays...</p>;
  }
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {continent.map((continent, index) => {
          return (
            <li key={index}>
              <input
                type="radio"
                id={continent}
                name="continent"
                value={continent}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
      </ul>

      <ul>
        {data
          .filter((country) => country.region.includes(selectedRadio))
          .slice(0, rangeValue)
          .map((country, index) => {
            return <Cards key={index} country={country} />;
          })}
      </ul>
    </div>
  );
};

export default Countries;
