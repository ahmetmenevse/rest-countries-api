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

  return (
    <>
        <section className='country-list'>
            {countries.map((country) => {
                const { numericCode, name, population, flags, region, capital } = country;
                    return (
                        <article key={numericCode}>
                            <div>
                            <img src={flags.png} alt={name.common} />
                            <div className='country-details'>
                                <h3>{name.common}</h3>
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                            </div>
                            </div>
                        </article>
                    )
            })}
        </section>
    </>
  )
}
