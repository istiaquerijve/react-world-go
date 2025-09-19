import React, { useState } from 'react';
import './Country.css'

const Country = ({  country, handleVisitedCountries  }) => {
    const [visited, setVisited] = useState(false)
    console.log(handleVisitedCountries);
    
    // console.log(country.area.area);

    const handleVisited = () => {
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // <--!-->
        // setVisited(visited ? false : true);
        // <--!-->
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    
    return (
        <div class ={`country ${visited && 'country-visited'}` }>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big country" : 'Small country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not visited'}
            </button>
        </div>
    );
};

export default Country;