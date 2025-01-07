import React from "react";
import { useNavigate, useLocation } from "react-router-dom";



type TablaInversionProps = {
  data: {
    periodo: number;
    saldo: string;
    rendimientoPeriodo: string;
    rendimientoAcumulado: string;
  }[];
};

export default function TablaInversion() {
  const navigate = useNavigate();
  const location = useLocation();
  const data: TablaInversionProps["data"] = location.state?.data || [];

  const volver = () => {
    navigate("/");
  };

  return (
    <div className="tabla-container">
      
      <div className="tabla-header">
        <span className="tabla-column-header">Periodo (Años)</span>
        <span className="tabla-column-header">Saldo</span>
        <span className="tabla-column-header">Rendimiento Periodo</span>
        <span className="tabla-column-header">Rendimiento Acumulado</span>
      </div>
      <div className="tabla-list">
        {data.map((item) => (
          <div className="tabla-row" key={item.periodo.toString()}>
            <span className="tabla-column">{item.periodo}</span>
            <span className="tabla-column">{item.saldo}</span>
            <span className="tabla-column">{item.rendimientoPeriodo}</span>
            <span className="tabla-column">{item.rendimientoAcumulado}</span>
          </div>
        ))}
      </div>
      <button onClick={volver} className="tabla-button">
        VOLVER
      </button>
    </div>
  );
}
