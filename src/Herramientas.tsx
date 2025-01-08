import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilos/EstiloHerramientas.css';

const Herramientas: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHerramientas = (ruta: string) => {
    navigate(ruta);
  };

  const opciones = [
    { nombre: 'Calculadora de Préstamos', ruta: '/prestamo', icono: '💰' },
    { nombre: 'Calculadora de Ahorros', ruta: '/ahorros', icono: '🏦' },
    { nombre: 'Calculadora de Inversiones', ruta: '/calculadora-inversiones', icono: '📈' },
    { nombre: 'Conversor de Divisas', ruta: '/divisa', icono: '💱' },
    { nombre: 'Cotización de Acciones NY', ruta: '/acciones', icono: '📊' },
    { nombre: 'Rendimiento para la Jubilación', ruta: '/jubilacion', icono: '👴' },
  ];

  return (
    <div className="herramientas-container">
      <h1 className="herramientas-titulo">Seleccione una Herramienta Financiera</h1>
      <div className="herramientas-grid">
        {opciones.map((opcion) => (
          <button
            key={opcion.ruta}
            className="herramienta-boton"
            onClick={() => navigateToHerramientas(opcion.ruta)}
          >
            <span className="herramienta-icono">{opcion.icono}</span>
            <span className="herramienta-nombre">{opcion.nombre}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Herramientas;
