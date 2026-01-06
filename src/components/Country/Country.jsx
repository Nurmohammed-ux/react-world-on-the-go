import React, { useState } from "react";
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {

  const countryName = country.name;
  const { common } = countryName;

  // console.log(handleVisitedCountries)
  const [ visited, setVisited ] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  }

  return (
    <div className= {`flex gap-6 items-center p-6 border border-gray-300 rounded-xl ${visited && 'country-visited'}`} >
        <img className="h-20 w-32" 
          src={country?.flags?.flags?.png} 
          alt={country.flags.flags.alt} />
        <div>
          <h2 className="text-xl font-bold">{common}</h2>
          <p className="font-medium">{country.capital.capital}</p>
          <p>Population : {country.population.population}</p>
          <p className="mb-3">{country.area.area > 300000 ? "Big Country" : "Small Country"} : {country.area.area}</p>
          <button onClick={handleVisited}>{visited ? <span className="text-green-500 bg-green-50">Visited</span> : <span className="text-red-500 bg-red-50">Not Visited</span>}</button>
          <button className="mt-3" onClick={() => {handleVisitedFlag(country?.flags?.flags?.png)}}>Add Visited flags</button>
        </div>
      </div>
  );
};

export default Country;
