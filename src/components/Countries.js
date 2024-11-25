import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Cards from "./Cards";

const Countries = () => {
  const [data, setData] = useState([]); // Crée un état pour les pays
  const [loading, setLoading] = useState(true); // Crée un état pour le chargement
  // utilise Axios pour importer les pays
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération des pays" + error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des pays...</p>;
  }
  return (
    <div className="countries">
      <h1>Countries</h1>

      <ul>
        {data.map((country, index) => {
          return <Cards key={index} country={country} />;
        })}
      </ul>
    </div>
  );
};

export default Countries;
