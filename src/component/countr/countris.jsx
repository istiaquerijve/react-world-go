import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('clicked', country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    
    return (
        <div className = "">

            <h1>In the Countries: {countries.length}</h1>
            <h3>Total country visited: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(Country => <li
                    key={Country.cca3.cca3}
                    >{Country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {
                countries.map(country => <Country key={country.cca3.cca3} country = {country} 
                handleVisitedCountries = {handleVisitedCountries} >

                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;