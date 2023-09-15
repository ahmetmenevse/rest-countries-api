import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../country.css'

export default function Country() {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const country = await response.json()
      setCountry(country)
    }
    fetchCountry()
  }, [name])

  // Function to access the first currency object
  const getFirstCurrency = (currencies) => {
    const currencyValues = Object.values(currencies);
    if (currencyValues.length > 0) {
      const firstCurrency = currencyValues[0];
      return {
        name: firstCurrency.name,
        symbol: firstCurrency.symbol,
      };
    }
    return null; // Return null if no currencies are available
  };


  return (
    <>
      <section className='country'>
        <Link to='/' className='btn btn-light'><i className='fas fa-arrow-left'></i> Back</Link>
        
        {country.map((c) => {
          const {numericCode, name, population, flags, region, subregion,capital, tld, currencies, languages, borders, altSpellings} = c
          console.log(c)
          const firstCurrency = getFirstCurrency(currencies);
          const languagesValues = Object.keys(languages).map(languageCode => (
            <span key={languageCode}>
              {languages[languageCode]}
              {Object.keys(languages).length > 1 && ( // Check if there are multiple languages
                <span> ({languageCode})</span>
              )}
              {languageCode !== Object.keys(languages)[Object.keys(languages).length - 1] && ', '} {/* Add comma if not the last language */}
            </span>
          ))
          const borderCountries = borders.map((border) => {
                                  return (
                                    <ul key={border}>
                                      <li>{border}</li>
                                    </ul>
                                  )
                                })
          return (
            <article key={numericCode}>
              <div className='country-inner'>
                <div className='flag'>
                  <img src={flags.png} alt={name} />
                </div>

                <div className='country-details'>
                  <div>
                    <h1>{name.common}</h1>
                    <h5>Native Name: <span>{altSpellings[2]}</span></h5>
                    <h5>Population:  <span>{population}</span></h5>
                    <h5>Region:  <span>{region}</span></h5>
                    <h5>Sub Region:  <span>{subregion}</span> </h5>
                    <h5>Capital:  <span>{capital}</span></h5>
                    <div className='borders'>
                      <h3>Border Countries: <span>{borderCountries}</span></h3>
                    </div> 
                  </div>

                  <div className='details-right'>
                    <h5>Top Level Domain:  <span>{tld}</span></h5>
                    <h5>Currencies:<span>{firstCurrency.name}</span></h5>
                    <h5>Languages: <span>{languagesValues}</span></h5>
                  </div>
                </div>
              </div>         
            </article>
          )
        })}
      </section>
    </>
  )
}

