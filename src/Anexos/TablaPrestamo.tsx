import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../Estilos/EstiloTablaPrestamo.css'


type Item = {
  periodo: number;
  cuota: string;
  interes: string;
  amortizacion: string;
  saldoPendiente: string;
};

type TablaAmortizacionProps = {
  data: Item[];
};

export default function TablaAmortizacion() {
  const navigate = useNavigate();
  const location = useLocation();
  const data: TablaAmortizacionProps["data"] = location.state?.data || [];

  const volver = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="enunciado">Tabla de Amortización</h2>
      <div className="tabla-container">
        <table className="tabla-amortizacion">
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Cuota</th>
              <th>Interés</th>
              <th>Amortización</th>
              <th>Saldo Pendiente</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.periodo.toString()}>
                <td>{item.periodo}</td>
                <td>{item.cuota}</td>
                <td>{item.interes}</td>
                <td>{item.amortizacion}</td>
                <td>{item.saldoPendiente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={volver} className="touchableButton">
        Volver
      </button>
    </div>
  );
}