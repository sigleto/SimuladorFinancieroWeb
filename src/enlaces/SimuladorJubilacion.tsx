import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstiloCalculadoras.css'

export default function App() {
  const [edadActual, setEdadActual] = useState<string>('');
  const [edadJubilacion, setEdadJubilacion] = useState<string>('');
  const [montoActual, setMontoActual] = useState<string>('');
  const [tasaInteres, setTasaInteres] = useState<string>('');

  const navigate = useNavigate();
 

  const calcularJubilacion = () => {
    if (!edadActual || !edadJubilacion || !montoActual || !tasaInteres) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    navigate('/resultado-jubilacion', {
      state: { edadActual, edadJubilacion, montoActual, tasaInteres },
    });
  };

  return (
    <div className="container">
      <h2>Calculadora de Jubilación</h2>
      
      <input
        type="number"
        placeholder="Edad actual"
        value={edadActual}
        onChange={(e) => setEdadActual(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad de jubilación"
        value={edadJubilacion}
        onChange={(e) => setEdadJubilacion(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto actual"
        value={montoActual}
        onChange={(e) => setMontoActual(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tasa de interés anual (%)"
        value={tasaInteres}
        onChange={(e) => setTasaInteres(e.target.value)}
      />
      <button onClick={calcularJubilacion}>Calcular</button>

      
    </div>
  );
}
