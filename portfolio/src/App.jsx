import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Navbar from './components/navbar/Navbar';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe/>}/>
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
