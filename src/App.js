import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/task/Home.jsx';  // Pastikan path ini benar
import About from './components/task/About.jsx';  // Pastikan path ini benar
import Services from './components/task/Services.jsx';  // Pastikan path ini benar
import { FaUser, FaHome, FaConciergeBell } from "react-icons/fa";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
          <div className="container">
            <NavLink className="navbar-brand" to="/">RouterDemo</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                    to="/" 
                  >
                    <FaHome /> Beranda
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                    to="/about"
                  >
                    <FaUser /> Tentang Kami
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} 
                    to="/services"
                  >
                    <FaConciergeBell /> Layanan
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        
        <footer className="bg-light text-center py-3 mt-auto">
          <p>&copy; 2024 TaskEduwork. NabilHatami.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
