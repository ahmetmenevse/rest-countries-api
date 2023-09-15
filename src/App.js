import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Countries from './components/Countries';
import Country from './components/Country';
import Filter from './components/Filter';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className='container'>
    <Router>
        <Header  darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
        <Route element={<Filter />} />
        <Route path='/' element={<Countries darkMode={darkMode} />} />
        <Route path='/countries/:name' element={<Country />} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;
