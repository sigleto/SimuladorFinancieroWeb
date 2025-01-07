import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const RentabilidadAcciones: React.FC = () => {
  const [symbol, setSymbol] = useState<string>('');
  const [cantidad, setCantidad] = useState<string>('');
  const [precioCompra, setPrecioCompra] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);
  const [cotizacionActual, setCotizacionActual] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const calcularRentabilidad = async () => {
    try {
      const response = await axios.get(
        `https://api.marketstack.com/v1/tickers/${symbol}/eod/latest?access_key=e811f5a4ab6c227428ab91a111b97014&exchange=XNYS`
      );

      if (response.data) {
        const stockData = response.data;
        const precioActual = stockData.close;
        setCotizacionActual(precioActual);

        const cantidadAccion = parseInt(cantidad);
        const inversionTotal = cantidadAccion * parseFloat(precioCompra);
        const valorActual = cantidadAccion * precioActual;
        const rentabilidad = valorActual - inversionTotal;
        setResultado(rentabilidad.toFixed(2).toString());
        setError(null);
      } else {
        setError('El símbolo de la acción no existe.');
      }
    } catch (error) {
      console.error('Error en la solicitud de datos de la acción:', error);
      setError('Error al obtener datos de la acción');
    }
  };

  const volver = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Simulador de Rentabilidad de Acciones</h2>

      <input
        type="text"
        placeholder="Símbolo de la Acción (por ejemplo, AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad de Acciones"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio de Compra por Acción"
        value={precioCompra}
        onChange={(e) => setPrecioCompra(e.target.value)}
      />
      
      <button onClick={calcularRentabilidad}>Calcular Rentabilidad</button>

      {error && <p className="error">{error}</p>}
      {resultado !== null && <p>La rentabilidad estimada es: {resultado}</p>}
      {cotizacionActual !== null && <p>Cotización actual: {cotizacionActual}</p>}

      <button onClick={volver}>VOLVER</button>
    </div>
  );
};

export default RentabilidadAcciones;
