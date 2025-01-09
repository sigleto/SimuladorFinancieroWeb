import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstiloCalculadoras.css'; // Estilos importados desde el archivo CSS

const CalculadoraAhorros = () => {
  const [meta, setMeta] = useState('');
  const [tasaInteres, setTasaInteres] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [tipoInteres, setTipoInteres] = useState('anual');
  const navigate = useNavigate();

  const calcularCuota = () => {
    if (!meta || !tasaInteres || !periodo) {
      alert('Por favor, completa todos los campos.');
    } else {
      navigate("/resultado-ahorro", { state: { meta, tasaInteres, periodo, tipoInteres } });
    }
  };

  return (
    <div className="container">
      <h2 className="label">Meta de ahorro</h2>
      <input
        className="input"
        type="number"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
      />

      <div className="row">
        <div>
          <h3 className="label">Tasa de interés (%)</h3>
          <input
            className="input"
            type="number"
            value={tasaInteres}
            onChange={(e) => setTasaInteres(e.target.value)}
          />
        </div>

        <div>
          <h3 className="label">Tipo de interés</h3>
          <select
            className="picker"
            value={tipoInteres}
            onChange={(e) => setTipoInteres(e.target.value)}
          >
            <option value="anual">Anual</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>
      </div>

      <h3 className="label">Período (años)</h3>
      <input
        className="input"
        type="number"
        value={periodo}
        onChange={(e) => setPeriodo(e.target.value)}
      />

      <button className="touchableButton" onClick={calcularCuota}>
        <span className="buttonText">Calcular Ahorro Necesario</span>
      </button>
    </div>
  );
};

export default CalculadoraAhorros;
