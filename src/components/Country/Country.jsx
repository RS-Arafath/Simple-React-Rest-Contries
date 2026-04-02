import React, { useState } from 'react';
import './country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  //console.log(Object.values(country.currencies.currencies)[0].name);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //aibabe o kora jay
    // setVisited(visited ? false : true)
    setVisited(!visited); // toggle
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited ? 'visited-country' : ''}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name: {country.name.common}</h1>
      <h4>Official Name: {country.name.official}</h4>
      <h3>Capital: {country.capital.capital}</h3>
      <p>
        Area: {country.area.area}{' '}
        <strong>
          {' '}
          {country.area.area > 300000
            ? '(Big Country)'
            : '(Small Country)'}{' '}
        </strong>
      </p>
      <p>Population: {country.population.population}</p>
      <p>
        Currencies:{' '}
        {Object.values(country.currencies.currencies).map(
          (c) => c.symbol + ' ' + c.name,
        )}
      </p>

      <button onClick={handleVisited} className="visitedBtn">
        {visited ? 'Visited' : 'Not Visited'}
      </button>
      <button className="visitedBtn" onClick={()=>{handleVisitedFlags(country?.flags?.flags?.png)}}>
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
