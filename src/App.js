import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header.jsx'
import Section1 from './components/Section1/Section1';

import  Trp  from './pages/Trp/Trp.jsx'
import  Tours   from './pages/Tours/Tours';
import Services from './pages/Services/Services.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Section1/>
      <Routes>
        <Route exact path='/' element={<Trp />} />
        <Route path='/tours' elemt={<Tours />} />
        <Route path='/service' element={<Services />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
