import React, { use, useState } from 'react';
import Country from './PracticeCountry/Country';

const PracticeCountries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countriesData)

    const [ visitedCountries, setVisitedCountries ] = useState([]);
    const handleVisitedCountries = ( country ) => {
        // console.log("Country Visited : ", country.name.common);
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
    }


    return (
        <div>
            <h2 className='border border-gray-500 p-6 my-6 rounded-xl'>Total Country Number: {countries.length}</h2>
            <h4 className='border border-gray-300 p-5 my-6 rounded-xl'>Number of visited country : {visitedCountries.length}</h4>
            <ol className='border border-gray-300 p-6 my-6 text-center rounded-xl'>
                {visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='grid grid-cols-3 gap-7'>
                {
                countries.map((country) => <Country 
                handleVisitedCountries = {handleVisitedCountries}
                key={country.cca3.cca3} 
                country ={ country }/>)
                }
            </div>        
        </div>
    );
};

export default PracticeCountries;