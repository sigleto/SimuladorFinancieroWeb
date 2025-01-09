import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstiloCalculadoras.css'; // Estilos importados desde el archivo CSS

const CalculadoraInversiones = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [contributions, setContributions] = useState('0');
  const [tipoInteres, setTipoInteres] = useState('anual');
  const [unidadPeriodo, setUnidadPeriodo] = useState('años');
  const navigate = useNavigate();

  const calcularCuota = () => {
    if (!principal || !rate || !time || !contributions) {
      alert('Por favor, completa todos los campos.');
    } else {
      navigate("/resultado-inversiones", { state: { principal, rate, time, contributions, tipoInteres, unidadPeriodo } });
    }
  };

  return (
    <div className="container">
      <h2 className="labelA">Calculadora de Inversiones</h2>

      <div className="inputContainer">
        <div className="row">
          <h3 className="label">Principal</h3>
          <input
            className="input"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="row">
          <h3 className="label">Interés (%)</h3>
          <div className="pickerContainer">
            <input
              className="input"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
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

        <div className="row">
          <h3 className="label">Duración</h3>
          <div className="pickerContainer">
            <input
              className="input"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <select
              className="picker"
              value={unidadPeriodo}
              onChange={(e) => setUnidadPeriodo(e.target.value)}
            >
              <option value="años">Años</option>
              <option value="meses">Meses</option>
            </select>
          </div>
        </div>

        <div className="row">
          <h3 className="label">Contribuciones Anuales</h3>
          <input
            className="input"
            type="number"
            value={contributions}
            onChange={(e) => setContributions(e.target.value)}
          />
        </div>
      </div>

      <button className="touchableButton" onClick={calcularCuota}>
        <span className="buttonText">Calcular</span>
      </button>
    </div>
  ); 
};

export default CalculadoraInversiones;
