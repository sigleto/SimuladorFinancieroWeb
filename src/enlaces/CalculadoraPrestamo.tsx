import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstiloCalculadoras.css'; // Estilos importados desde el archivo CSS

const CalculadoraPrestamos: React.FC = () => {
  const [capital, setCapital] = useState<string>('');
  const [tasaInteres, setTasaInteres] = useState<string>('');
  const [periodo, setPeriodo] = useState<string>('');
  const navigate = useNavigate();

  const calcularCuota = () => {
    if (!capital || !tasaInteres || !periodo) {
      alert('Por favor, completa todos los campos.');
    } else {
      navigate("/resultados-prestamo", { state: { capital, tasaInteres, periodo } });
    }
  };

  return (
    <div className="container">
      <h2 className="labelA">Calculadora de Préstamos</h2>

      <div className="inputContainer">
        <div className="row">
          <h3 className="label">Capital</h3>
          <input
            className="input"
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
        </div>

        <div className="row">
          <h3 className="label">Tasa de Interés (%)</h3>
          <input
            className="input"
            type="number"
            value={tasaInteres}
            onChange={(e) => setTasaInteres(e.target.value)}
          />
        </div>

        <div className="row">
          <h3 className="label">Período (meses)</h3>
          <input
            className="input"
            type="number"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          />
        </div>
      </div>

      <button className="touchableButton" onClick={calcularCuota}>
        <span className="buttonText">Calcular Cuota</span>
      </button>
    </div>
  );
};

export default CalculadoraPrestamos;
