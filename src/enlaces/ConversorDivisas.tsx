import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/EstiloCalculadoras.css';



interface Moneda {
  codigo: string;
  nombre: string;
}

const monedas: Moneda[] = [
  { codigo: 'USD', nombre: 'Dólar estadounidense' },
  { codigo: 'EUR', nombre: 'Euro' },
  { codigo: 'AUD', nombre: 'Dólar australiano' },
  { codigo: 'ARS', nombre: 'Peso argentino' },
  { codigo: 'UYU', nombre: 'Peso uruguayo' },
  { codigo: 'CLP', nombre: 'Peso chileno' },
  { codigo: 'COP', nombre: 'Peso colombiano' },
  { codigo: 'PEN', nombre: 'Sol peruano' },
  { codigo: 'PYG', nombre: 'Guaraní paraguayo' },
  { codigo: 'CRC', nombre: 'Colón costarricense' },
  { codigo: 'MXN', nombre: 'Peso mexicano' },
  { codigo: 'BGN', nombre: 'Lev búlgaro' },
  { codigo: 'BRL', nombre: 'Real brasileño' },
  { codigo: 'CAD', nombre: 'Dólar canadiense' },
  { codigo: 'CHF', nombre: 'Franco suizo' },
  { codigo: 'CNY', nombre: 'Yuan chino' },
  { codigo: 'CZK', nombre: 'Corona checa' },
  { codigo: 'DKK', nombre: 'Corona danesa' },
  { codigo: 'GBP', nombre: 'Libra esterlina' },
  { codigo: 'HKD', nombre: 'Dólar de Hong Kong' },
  { codigo: 'HRK', nombre: 'Kuna croata' },
  { codigo: 'HUF', nombre: 'Florín húngaro' },
  { codigo: 'IDR', nombre: 'Rupia indonesia' },
  { codigo: 'ILS', nombre: 'Nuevo séquel israelí' },
  { codigo: 'INR', nombre: 'Rupia india' },
  { codigo: 'ISK', nombre: 'Corona islandesa' },
  { codigo: 'JPY', nombre: 'Yen japonés' },
  { codigo: 'KRW', nombre: 'Won surcoreano' },
  { codigo: 'MYR', nombre: 'Ringgit malasio' },
  { codigo: 'NOK', nombre: 'Corona noruega' },
  { codigo: 'NZD', nombre: 'Dólar neozelandés' },
  { codigo: 'PHP', nombre: 'Peso filipino' },
  { codigo: 'PLN', nombre: 'Złoty polaco' },
  { codigo: 'RON', nombre: 'Leu rumano' },
  { codigo: 'RUB', nombre: 'Rublo ruso' },
  { codigo: 'SEK', nombre: 'Corona sueca' },
  { codigo: 'SGD', nombre: 'Dólar singapurense' },
  { codigo: 'THB', nombre: 'Baht tailandés' },
  { codigo: 'TRY', nombre: 'Lira turca' },
  { codigo: 'ZAR', nombre: 'Rand sudafricano' },
];

const ConversorDivisas: React.FC = () => {
  const [monedaOrigen, setMonedaOrigen] = useState<string>('USD');
  const [monedaDestino, setMonedaDestino] = useState<string>('EUR');
  const [tipoCambio, setTipoCambio] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');
  const [cantidadIntroducida, setCantidadIntroducida] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [mensajeEstado, setMensajeEstado] = useState<string>('');

  const obtenerTipoCambio = async () => {
   
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/d93ad7934d4b03cf5de6577a/latest/${monedaOrigen}`
      );
      const data = await response.json();

      if (response.ok) {
        if (data && data.conversion_rates && data.conversion_rates[monedaDestino]) {
          const tasaCambio = data.conversion_rates[monedaDestino];
          setTipoCambio(tasaCambio.toString());
          setMensajeEstado(`Cantidad introducida: ${cantidadIntroducida} ${monedaOrigen}`);
          setError('');
        } else {
          setError('Error: La moneda de origen o destino no está disponible.');
        }
      } else {
        setError('Error al obtener el tipo de cambio');
      }
    } catch (error) {
      setError('Error en la solicitud de tipo de cambio');
    }
  };

  const convertirDivisas = () => {
    if (tipoCambio === '') {
      setError('Primero debes obtener el tipo de cambio');
      return;
    }

    setError('');
    const cantidadFloat = parseFloat(cantidadIntroducida);
    const resultadoCalculado = cantidadFloat * parseFloat(tipoCambio);
    setResultado(resultadoCalculado.toFixed(2).toString());
  };

  const navigate = useNavigate();
  const volver = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="labelA">Conversor de Divisas</h2>
      
      <div className="row">
        <h3 className="label">Cantidad a convertir</h3>
        <input
          className="input"
          type="number"
          value={cantidadIntroducida}
          onChange={(e) => setCantidadIntroducida(e.target.value)}
        />
      </div>

      <div className="row">
        <h3 className="label">Moneda de origen</h3>
        <select
          className="picker"
          value={monedaOrigen}
          onChange={(e) => setMonedaOrigen(e.target.value)}
        >
          {monedas.map((moneda) => (
            <option key={moneda.codigo} value={moneda.codigo}>
              {moneda.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        <h3 className="label">Moneda de destino</h3>
        <select
          className="picker"
          value={monedaDestino}
          onChange={(e) => setMonedaDestino(e.target.value)}
        >
          {monedas.map((moneda) => (
            <option key={moneda.codigo} value={moneda.codigo}>
              {moneda.nombre}
            </option>
          ))}
        </select>
      </div>

      <button className="touchableButton" onClick={obtenerTipoCambio}>
        <span className="buttonText">Obtener Tipo de Cambio</span>
      </button>

      {tipoCambio && (
        <div>
          <p>{mensajeEstado}</p>
          <p>Tipo de Cambio: 1 {monedaOrigen} = {tipoCambio} {monedaDestino}</p>
        </div>
      )}

      {error && <p className="errorText">{error}</p>}

      <button className="touchableButton" onClick={convertirDivisas}>
        <span className="buttonText">Convertir</span>
      </button>

      {resultado && <p className="resultText">Resultado: {resultado} {monedaDestino}</p>}

      <button className="touchableButtonV" onClick={volver}>
        <span className="buttonTextV">VOLVER</span>
      </button>
    </div>
  );
};

export default ConversorDivisas;
