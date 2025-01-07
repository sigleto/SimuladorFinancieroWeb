import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Usamos react-icons para íconos web
import './Estilos/EstiloHome.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const openMenu = () => {
    console.log("Menú abierto");
    // Aquí puedes implementar el manejo de visibilidad del menú
  };

  const AccesoHerramientas = () => {
    navigate('/herramientas');
  };

  return (
    <div className="container">
      <FaBars 
        size={30} 
        className="menuIcon" 
        onClick={openMenu} 
      />
      <div className="imagenes">
        <img className="logo" src="/LogoJuan.png" alt="Logo" />
      </div>
      <div className="imagenes">
        <img className="imagen" src="/calculadora.jpg" alt="Calculadora" />
      </div>
      <div className="tituloContainer">
        <h1 className="titulo">¡Optimiza tus finanzas!</h1>
      </div>
      <button onClick={AccesoHerramientas} className="buttonText">
        RECURSOS
      </button>
    </div>
  );
};

export default Home;
