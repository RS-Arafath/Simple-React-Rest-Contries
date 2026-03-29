import React from 'react';

const Country = ({ country }) => {
  //console.log(Object.values(country.currencies.currencies)[0].name);
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <h3>Official Name: {country.name.official}</h3>
      <h3>Capital: {country.capital.capital}</h3>
      <p>Population: {country.population.population}</p>
      <p>Currencies: {Object.values(country.currencies.currencies).map(c => c.symbol + " " + c.name)}</p>
    </div>
  );
  
};

export default Country;
