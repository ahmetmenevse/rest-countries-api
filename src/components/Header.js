import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { faMoon as faRegularMoon } from '@fortawesome/free-regular-svg-icons';

const iconMapping = { 'fa-regular fa-moon': faRegularMoon };

export default function Header(props) {
    const icon = iconMapping['fa-regular fa-moon'];
  return (
    <nav
    className={props.darkMode ? "dark-mode" : ""}
    >
      <h2>Where in the word? </h2>
        <div className='toggler' onClick={props.toggleDarkMode}>
            <div className='toggler__icon'>
            {props.darkMode ? 
            <FontAwesomeIcon icon={faMoon} /> 
            : <FontAwesomeIcon icon={icon} />}
            </div>
            <p>Dark Mode</p>
        </div>
    </nav>
  )
}
