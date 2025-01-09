import { useNavigate, useLocation } from "react-router-dom";
import '../Estilos/EstiloTablaInversion.css';

type TablaInversionProps = {
  data: {
    periodo: number;
    saldo: string;
    rendimientoPeriodo: string;
    rendimientoAcumulado: string;
  }[];
  unidadPeriodo: string;
};

export default function TablaInversion() {
  const navigate = useNavigate();
  const location = useLocation();
  const data: TablaInversionProps["data"] = location.state?.data || [];
  const unidadPeriodo: string = location.state?.unidadPeriodo || 'años';

  const volver = () => {
    navigate("/");
  };

  const formatPeriodo = (periodo: number) => {
    if (unidadPeriodo === 'meses') {
      const años = Math.floor(periodo / 12);
      const meses = periodo % 12;
      if (años === 0) return `${meses} ${meses === 1 ? 'mes' : 'meses'}`;
      if (meses === 0) return `${años} ${años === 1 ? 'año' : 'años'}`;
      return `${años} ${años === 1 ? 'año' : 'años'} y ${meses} ${meses === 1 ? 'mes' : 'meses'}`;
    }
    return `${periodo} ${periodo === 1 ? 'año' : 'años'}`;
  };

  return (
    <div className="container">
      <h2 className="enunciado">Tabla de Inversión</h2>
      <div className="tabla-container">
        <table className="tabla-inversion">
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Saldo</th>
              <th>Rendimiento Periodo</th>
              <th>Rendimiento Acumulado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.periodo.toString()}>
                <td>{formatPeriodo(item.periodo)}</td>
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
