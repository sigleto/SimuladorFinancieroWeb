import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/App.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const AccesoHerramientas = () => {
    navigate('/herramientas');
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <header className="home-header">
          <h1 className="main-title">Simuladores Financieros</h1>
          <p className="subtitle">Optimiza tus finanzas personales</p>
        </header>
        <main className="main-content">
          <p className="description">
            Explora nuestros simuladores avanzados para préstamos, inversiones, 
            ahorros, divisas y más. Toma decisiones financieras inteligentes con 
            nuestras herramientas personalizadas.
          </p>
          <button onClick={AccesoHerramientas} className="cta-button">
            Explorar Simuladores
          </button>
        </main>
      </div>
      <footer className="home-footer">
        <p>&copy; 2025 Finanzas Inteligentes. Diseñado para potenciar tu futuro financiero.</p>
      </footer>
    </div>
  );
};

export default Home;
