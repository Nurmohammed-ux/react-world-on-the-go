import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("country", country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlag = (flag) => {
    console.log("Visited flags", flag);
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // console.log(countries[0].name.common);

  return (
    <div>
      <h4 className="border border-gray-200 text-2xl text-center font-bold p-4 my-5 rounded-xl">
        Total Country number : {countries.length}
      </h4>
      <h4 className="border border-gray-200 text-2xl text-center font-bold p-4 my-5 rounded-xl">
        Total Visited Country : {visitedCountries.length}
      </h4>
      <ol className="text-center text-xl border border-gray-300 my-6 py-6 rounded-xl">
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}> {country.name.common}</li>
        ))}
      </ol>
      <div className="border border-gray-300 grid grid-cols-6 gap-6 p-6 my-6">
        {visitedFlags.map((flag, index) => (
          <img
            key={flag}
            className="h-18 w-32"
            src={flag}
            alt={`Visited country flag ${index + 1}`}
          ></img>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
