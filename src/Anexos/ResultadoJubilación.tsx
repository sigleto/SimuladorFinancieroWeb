import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Line } from 'react-chartjs-2';



interface ResultadoJubilacionParams {
  edadActual: number;
  edadJubilacion: number;
  montoActual: number;
  tasaInteres: number;
}

interface ResultadoJubilacionState {
  montoFinal: number | null;
}

export default function ResultadoJubilacion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { edadActual, edadJubilacion, montoActual, tasaInteres } = location.state as ResultadoJubilacionParams;

  const [resultado, setResultado] = useState<ResultadoJubilacionState>({ montoFinal: null });

  const calcularJubilacion = () => {
    const tiempoRestante = edadJubilacion - edadActual;
    const montoFinal = montoActual * Math.pow((1 + tasaInteres / 100), tiempoRestante);
    setResultado({ montoFinal });
  };

  useEffect(() => {
    calcularJubilacion();
  }, []);

  const DiasJubilacion = () => {
    navigate('/dias-jubilacion');
  };

  const volver = () => {
    navigate('/');
  };

  const labels = Array.from({ length: edadJubilacion - edadActual + 1 }, (_, i) => (edadActual + i).toString());
  const data = {
    labels,
    datasets: [
      {
        label: 'Proyección de ahorro',
        data: labels.map((_, i) => montoActual * Math.pow((1 + tasaInteres / 100), i)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div>
 
      <h2 className="enunciado">Datos introducidos</h2>
      <p className="labelText">Edad actual: <span className="resultText">{edadActual} años</span></p>
      <p className="labelText">Edad de jubilación: <span className="resultText">{edadJubilacion} años</span></p>
      <p className="labelText">Ahorros actuales: <span className="resultText">{montoActual}</span></p>
      <p className="labelText">Tasa de interés anual: <span className="resultText">{tasaInteres}%</span></p>
      <h2 className="enunciado">Resultados</h2>
      <p className="labelText">Monto estimado para la jubilación: <span className="resultTextr">{resultado.montoFinal?.toFixed(2) ?? "No disponible"}</span></p>
      <h2 className="enunciado">Gráfico de rendimiento</h2>
      <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      <button onClick={DiasJubilacion} className="touchableButton">Cuánto falta para jubilarte</button>
      <button onClick={volver} className="touchableButtonV">VOLVER</button>
    </div>
  );
}
