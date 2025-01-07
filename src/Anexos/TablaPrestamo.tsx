import React from "react";
import { useNavigate, useLocation } from "react-router-dom";



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
    <div className="tabla-container">
     
      <button onClick={volver} className="tabla-button">
        VOLVER
      </button>
      <div className="tabla-header">
        <span className="tabla-column-header">Periodo</span>
        <span className="tabla-column-header">Cuota</span>
        <span className="tabla-column-header">Interés</span>
        <span className="tabla-column-header">Amortización</span>
        <span className="tabla-column-header">Sdo. Pendiente</span>
      </div>
      <div className="tabla-list">
        {data.map((item) => (
          <div className="tabla-row" key={item.periodo.toString()}>
            <span className="tabla-column">{item.periodo}</span>
            <span className="tabla-column">{item.cuota}</span>
            <span className="tabla-column">{item.interes}</span>
            <span className="tabla-column">{item.amortizacion}</span>
            <span className="tabla-column">{item.saldoPendiente}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
