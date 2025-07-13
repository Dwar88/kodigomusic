import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register'; // Importa el componente del formulario
import './App.css'; // Opcional, para estilos del contenedor principal

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
            {/* Puedes añadir una ruta para un componente "No encontrado" si lo deseas */}
            {/* <Route path="*" element={<h1>404: Página no encontrada</h1>} /> */}
          </Routes>
        </main>
        {/* <Footer /> si lo creaste */}
      </div>
    </Router>
  );
};

export default App;