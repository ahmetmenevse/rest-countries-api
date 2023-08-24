import React, { useState } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';
import Filter from './components/Filter';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className='container'>
      <Header  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Filter />
      <Countries  darkMode={darkMode}/>
    </div>
  );
}

export default App;
