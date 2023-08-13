import React, {useState, useEffect } from 'react'
const url = 'https://restcountries.com/v3.1/all';

export default function Countries(props) {
    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries); 
    }
    
    useEffect(() => {
        fetchCountries();
    }, [])

    const countryElement = countries.map((country) => {
        const { id, name, population, flags, region, capital } = country;
        return (
            <article key={id} className={props.darkMode ? "dark-mode" : ""}>
                <img src={flags.png} alt={name.common} />
                <h1 className='country-name'>{name.common}</h1>
                <div className='country-details'>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                </div>

            </article>
        )
    })

  return (
    <div className='country-list'>
      {countryElement}
    </div>
  )
}
