
import { useNavigate, useLocation } from "react-router-dom";
import '../Estilos/EstiloTablaInversion.css';

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
    <div className="container">
      <h2 className="enunciado">Tabla de Inversión</h2>
      <div className="tabla-container">
        <table className="tabla-inversion">
          <thead>
            <tr>
              <th>Periodo (Años)</th>
              <th>Saldo</th>
              <th>Rendimiento Periodo</th>
              <th>Rendimiento Acumulado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.periodo.toString()}>
                <td>{item.periodo}</td>
                <td>{item.saldo}</td>
                <td>{item.rendimientoPeriodo}</td>
                <td>{item.rendimientoAcumulado}</td>
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
