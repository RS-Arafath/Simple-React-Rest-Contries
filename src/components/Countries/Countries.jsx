import React, { use } from 'react';
import Country from '../Country/Country';
import './contries.css'

const Countries = ({ contriesPromise }) => {
  const contriesData = use(contriesPromise);
  const countries = contriesData.countries;

  return (
    <div>
      <h1>total countries: {countries.length}</h1>
      <div className='countries'>
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
