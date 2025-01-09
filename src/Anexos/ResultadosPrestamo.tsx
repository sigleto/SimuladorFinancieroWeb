import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../Estilos/EstiloResultados.css'


interface RouteParams {
  capital: string;
  tasaInteres: string;
  periodo: string;
}

interface TablaData {
  periodo: number;
  cuota: string;
  interes: string;
  amortizacion: string;
  saldoPendiente: string;
}

const ResultadosPrestamo: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { capital, tasaInteres, periodo } = location.state as RouteParams;

  const [cuota, setCuota] = useState<string>("");
  const [totalIntereses, setTotalIntereses] = useState<string>("");
  const [totalPagado, setTotalPagado] = useState<string>("");

  const calculandoFunc = () => {
    const capitalFloat = parseFloat(capital);
    const tasaInteresFloat = parseFloat(tasaInteres) / 100 / 12;
    const periodoFloat = parseFloat(periodo);

    const cuotaCalculada =
      (capitalFloat * tasaInteresFloat) /
      (1 - Math.pow(1 + tasaInteresFloat, -periodoFloat));

    setCuota(cuotaCalculada.toFixed(2));

    const totalInteresesPagados = cuotaCalculada * periodoFloat - capitalFloat;
    const totalPagadoCalculado = cuotaCalculada * periodoFloat;

    setTotalIntereses(totalInteresesPagados.toFixed(2));
    setTotalPagado(totalPagadoCalculado.toFixed(2));
  };

  useEffect(() => {
    calculandoFunc();
  }, []);

  const AccesoTabla = () => {
    const data: TablaData[] = [];
    const capitalFloat = parseFloat(capital);
    const tasaInteresFloat = parseFloat(tasaInteres) / 100 / 12;
    const periodoFloat = parseFloat(periodo);

    let saldoPendiente = capitalFloat;

    for (let i = 1; i <= periodoFloat; i++) {
      const cuotaCalculada =
        (capitalFloat * tasaInteresFloat) /
        (1 - Math.pow(1 + tasaInteresFloat, -periodoFloat));

      const interes = saldoPendiente * tasaInteresFloat;
      const amortizacion = cuotaCalculada - interes;

      data.push({
        periodo: i,
        cuota: cuotaCalculada.toFixed(2),
        interes: interes.toFixed(2),
        amortizacion: amortizacion.toFixed(2),
        saldoPendiente: saldoPendiente.toFixed(2),
      });

      saldoPendiente -= amortizacion;
    }

    navigate("/tabla", { state: { data } });
  };

  const volver = () => navigate("/Herramientas");
  return (
    <div className="container">
      <h2 className="enunciado">Datos introducidos</h2>
      <p className="labelText">Capital: <span className="resultText">{capital} €</span></p>
      <p className="labelText">Tasa de Interés: <span className="resultText">{tasaInteres}%</span></p>
      <p className="labelText">Período: <span className="resultText">{periodo} meses</span></p>
  
      <h2 className="enunciado">Resultados</h2>
      <p className="labelText">Cuota Mensual: <span className="resultTextr">{parseFloat(cuota).toFixed(2)} €</span></p>
      <p className="labelText">Total Pagado de intereses: <span className="resultText">{parseFloat(totalIntereses).toFixed(2)} €</span></p>
      <p className="labelText">Total Pagado al final: <span className="resultText">{parseFloat(totalPagado).toFixed(2)} €</span></p>
  
      <div className="button-container">
        <button onClick={AccesoTabla} className="touchableButton">Consultar Tabla</button>
        <button onClick={volver} className="touchableButtonV">Volver</button>
      </div>
    </div>
  );
}  

export default ResultadosPrestamo;
