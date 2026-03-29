import React, { use } from 'react';
import Country from '../Country/Country';
const Countries = ({ contriesPromise }) => {
  const contriesData = use(contriesPromise);
  const countries = contriesData.countries;

  return (
    <div>
      <h3>total countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country
          key={country.cca3.cca3}
          country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
