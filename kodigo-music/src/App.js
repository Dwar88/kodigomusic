import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Player from './components/Player/Player'; // Importa el reproductor
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/registro" element={<Register />} />
          </Routes>
        </main>
        <Player /> {/* Coloca el reproductor aquí */}
      </div>
    </Router>
  );
};

export default App;