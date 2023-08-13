import React, { useState } from 'react';
import Header from './components/Header';
import Countries from './components/Countries';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Countries darkMode={darkMode}/>
    </div>
  );
}

export default App;
