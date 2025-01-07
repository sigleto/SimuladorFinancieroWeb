import React from 'react';
import { useNavigate } from 'react-router-dom'; // Usamos el hook de react-router-dom para la navegación
import './Estilos/EstiloHerramientas.css'; // Estilos en un archivo CSS para la web

const Herramientas: React.FC = () => {
  const navigate = useNavigate(); // Reemplazamos useNavigation por useNavigate para web

  const navigateToHerramientas = (ruta: string) => {
    navigate(ruta); // Redirige a la ruta correspondiente
  };

  const opciones = [
    { nombre: 'CALCULADORA DE PRÉSTAMOS', ruta: '/prestamo' },
    { nombre: 'CALCULADORA DE AHORROS', ruta: '/ahorros' },
    { nombre: 'CALCULADORA DE INVERSIONES', ruta: '/calculadora-inversiones' },
    { nombre: 'CONVERSOR DE DIVISAS', ruta: '/divisa' },
    { nombre: 'COTIZACIÓN DE ACCIONES NY', ruta: '/acciones' },
    { nombre: 'RENDIMIENTO PARA LA JUBILACIÓN', ruta: '/jubilacion' },
  ];

  return (
    <div className="container">
      <h1 className="tituloOrg">Elige la herramienta a utilizar</h1>
      <div className="organismos">
        {opciones.map((opcion) => (
          <button
            key={opcion.ruta}
            className="opcion"
            onClick={() => navigateToHerramientas(opcion.ruta)} // Navegamos a la ruta correspondiente
          >
            {opcion.nombre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Herramientas;
