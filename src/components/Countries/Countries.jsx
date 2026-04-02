import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './contries.css';


const Countries = ({ contriesPromise }) => {
  const [visitedCountries, setVisitedContries] = useState([]);
  const [visitedFlag,setVisitedFlag]=useState([])


  const handleVisitedCountries = (country) => {
    //console.log('handle visited country', country);
    // const isAlreadyVisited = visitedCountries.find(c => c.cca3 === country.cca3);

    // if (isAlreadyVisited) {
    //   // Jodi thake, tahole remove (Decrement logic)
    //   const remainingCountries = visitedCountries.filter(c => c.cca3 !== country.cca3);
    //   setVisitedContries(remainingCountries);
    // } else {
    //   // Jodi na thake, tahole add (Increment logic)
    //   const newVisitedCountries = [...visitedCountries, country];
    //   setVisitedContries(newVisitedCountries);
    // }
    const isAlreadyzvisited = visitedCountries.find(c => c.cca3 === country.cca3);
    if (isAlreadyzvisited) {
      //jdi soman na hoy thle remaining a thakbe 
      const remainingCountry = visitedCountries.filter(c => c.cca3 !==country.cca3);
      setVisitedContries(remainingCountry)
    } else {
      const newVisitedCountry = [...visitedCountries, country];
      setVisitedContries(newVisitedCountry)
    }

  }


  //handle visited flags
  const handleVisitedFlags = (flag) =>{
    const newVisitedFlags = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlags)
  }
  const contriesData = use(contriesPromise);
  const countries = contriesData.countries;

  return (
    <div>
      <div className="heading">
        <h1>Total Countries: {countries.length}</h1>
        <h2>Total Visited Country: {visitedCountries.length}</h2>
        {/* <h2>Total Visited Flags: {visitedFlag.length}</h2> */}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
