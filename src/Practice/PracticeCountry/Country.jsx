import React, { useState } from "react";
import './Country.css'

const Country = ({ country,handleVisitedCountries }) => {
  const countryName = country.name;
  const { common } = countryName;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries( country );
  }
  return (
    <div className={`flex gap-6 border border-gray-300 p-6 rounded-xl ${visited && "country-visited"}`} >
      <img className="h-20 w-32" src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <div className="space-y-2">
        <h4>Name : {common}</h4>
        <h5>Capital : {country.capital.capital}</h5>
        <p>
          {country.population.population > 300000
            ? "Big Country"
            : "Small Country"}
          : {country.population.population}
        </p>
        <button onClick={handleVisited}>
          {visited ? (
            <span className="text-green-500 bg-green-50">Visited</span>
          ) : (
            <span className="bg-red-50 text-red-500">Not Visited</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Country;
