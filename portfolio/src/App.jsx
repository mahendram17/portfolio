import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Navbar from './components/navbar/Navbar';
import ContactMe from './components/ContactMe';
import ProtectedRoute from './components/ProtectedRoute';
import SignIn from './components/signIn';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
    //     <main>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/skills" element={<Skills />} />
    //       <Route path="/portfolio" element={<Portfolio />} />
    //       <Route path="/contactme" element={<ContactMe/>}/>
    //     </Routes>
    //     </main>
    //   </div>
    // </Router>
    <Router>
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skills"
            element={
              <ProtectedRoute>
                <Skills />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contactme"
            element={
              <ProtectedRoute>
                <ContactMe />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  </Router>

  );
}

export default App;
