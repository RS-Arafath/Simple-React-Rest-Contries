import React, { use } from 'react';

const contryes = ({ contriesPromise }) => {
  const contriesData = use(contriesPromise);
  const countries=contriesData.countries
  console.log(countries);
  return (
    <div>
      <h3>total countries: {countries.length}</h3>
    </div>
  );
};

export default contryes;