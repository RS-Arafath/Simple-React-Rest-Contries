import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './contries.css';


const Countries = ({ contriesPromise }) => {
  const [visitedCountries, setVisitedContries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log('handle visited country',country);
    
  }
  const contriesData = use(contriesPromise);
  const countries = contriesData.countries;

  return (
    <div>
      <div className="heading">
        <h1>Total Countries: {countries.length}</h1>
        <h2>Total Visited Country:</h2>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
