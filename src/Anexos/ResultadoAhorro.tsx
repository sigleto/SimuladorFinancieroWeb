import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registro de componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RouteParams {
  meta: string;
  tasaInteres: string;
  periodo: string;
  tipoInteres: string;
  unidadPeriodo: string;
}

const ResultadoAhorro: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { meta, tasaInteres, periodo, tipoInteres, unidadPeriodo } = location.state as RouteParams;

  const [ahorroNecesario, setAhorroNecesario] = useState<number | null>(null); // Usamos null para el valor inicial
  const [graficoData, setGraficoData] = useState<any>(null);

  const calcularAhorroNecesario = () => {
    const metaFloat = parseFloat(meta);
    const tasaInteresFloat = parseFloat(tasaInteres) / 100;
    const periodoFloat = parseFloat(periodo);

    const tasaInteresMensual = tipoInteres === 'anual' ? Math.pow(1 + tasaInteresFloat, 1 / 12) - 1 : tasaInteresFloat;
    const ahorroNecesarioCalculado =
      metaFloat /
      ((Math.pow(1 + tasaInteresMensual, periodoFloat * 12) - 1) / tasaInteresMensual);

    return isNaN(ahorroNecesarioCalculado) ? 0 : ahorroNecesarioCalculado;
  };

  useEffect(() => {
    const ahorro = calcularAhorroNecesario();
    setAhorroNecesario(ahorro);

    // Generar el gráfico después de calcular el ahorro necesario
    const labels = Array.from({ length: Math.min(10, parseFloat(periodo)) }, (_, i) => ((i + 1) % 5 === 0 || i === Math.min(10, parseFloat(periodo)) - 1 ? (i + 1).toString() : ''));
    const data = {
      labels,
      datasets: [
        {
          label: 'Ahorro acumulado',
          data: Array.from({ length: Math.min(10, parseFloat(periodo)) }, (_, i) => ahorro * 12 * (i + 1)),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };
    setGraficoData(data);
  }, [meta, tasaInteres, periodo, tipoInteres]);

  const volver = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="enunciado">Datos introducidos</h2>
      <p className="labelText">Meta de ahorro: <span className="resultText">{meta}</span></p>
      <p className="labelText">Tasa de Interés: <span className="resultText">{tasaInteres} %</span></p>
      <p className="labelText">Período: <span className="resultText">{periodo} {unidadPeriodo}</span></p>

      <h2 className="enunciado">Resultado</h2>
      <p className="labelText">Ahorro necesario mensual: <span className="resultText">{ahorroNecesario?.toFixed(2)}</span></p>

      {graficoData ? (
        <div style={{ height: '300px', width: '100%' }}>
          <Line data={graficoData} options={{ responsive: true, maintainAspectRatio: true }} />
          <p className="labelXAxis">Años</p>
        </div>
      ) : (
        <p>No hay datos disponibles para mostrar el gráfico.</p>
      )}

      <button onClick={volver} className="touchableButtonV">
        VOLVER
      </button>
    </div>
  );
};

export default ResultadoAhorro;
