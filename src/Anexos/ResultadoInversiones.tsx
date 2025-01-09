// ResultadoInversiones.tsx
import  { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



type RouteState = {
  principal: string;
  rate: string;
  time: string;
  contributions: string;
  tipoInteres: string;
  unidadPeriodo: string;
};

type DataTableEntry = {
  periodo: number;
  saldo: string;
  rendimientoPeriodo: string;
  rendimientoAcumulado: string;
};

export default function ResultadoInversiones() {
  const navigate = useNavigate();
  const location = useLocation();
  const { principal, rate, time, contributions, tipoInteres, unidadPeriodo } = location.state as RouteState;

  const [result, setResult] = useState<string | null>(null);
  const [totalIntereses, setTotalIntereses] = useState<string>('');
  const [totalPagado, setTotalPagado] = useState<string>('');
  const [rendimientoAcumulado, setRendimientoAcumulado] = useState<string>('');
  const [ganancia, setGanancia] = useState<string>('');
  

  const calculateInvestment = () => {
    const principalAmount = parseFloat(principal);
    const ratePercentage = parseFloat(rate) / 100;
    const timePeriod = parseFloat(time);
    const annualContributions = parseFloat(contributions);

    let totalIntereses = 0;
    let totalPagado = principalAmount;
    let rendimientoAcumulado = 0;

    if (tipoInteres === 'anual' && unidadPeriodo === 'años') {
      for (let i = 0; i < timePeriod; i++) {
        const interest = totalPagado * ratePercentage;
        totalIntereses += interest;
        totalPagado += annualContributions + interest;
      }
    } else if (tipoInteres === 'anual' && unidadPeriodo === 'meses') {
      const totalMonths = timePeriod;
      for (let i = 0; i < totalMonths; i++) {
        const interest = totalPagado * (ratePercentage / 12);
        totalIntereses += interest;
        totalPagado += annualContributions / 12 + interest;
      }
    } else if (tipoInteres === 'mensual' && unidadPeriodo === 'años') {
      const totalMonths = timePeriod * 12;
      for (let i = 0; i < totalMonths; i++) {
        const interest = totalPagado * ratePercentage;
        totalIntereses += interest;
        totalPagado += annualContributions / 12 + interest;
      }
    } else if (tipoInteres === 'mensual' && unidadPeriodo === 'meses') {
      const totalMonths = timePeriod;
      for (let i = 0; i < totalMonths; i++) {
        const interest = totalPagado * ratePercentage;
        totalIntereses += interest;
        totalPagado += annualContributions / 12 + interest;
      }
    }

    rendimientoAcumulado = totalPagado - principalAmount;
    setResult(totalPagado.toFixed(2));
    setTotalIntereses(totalIntereses.toFixed(2));
    setTotalPagado(totalPagado.toFixed(2));
    setRendimientoAcumulado(rendimientoAcumulado.toFixed(2));
    setGanancia(rendimientoAcumulado.toFixed(2));
  };

  useEffect(() => {
    calculateInvestment();
  }, []);

  const AccesoTabla = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const c = parseFloat(contributions);

    
    const n = unidadPeriodo === 'años' ? t : t / 12;
    const periodicRate = tipoInteres === 'anual' ? r / 100 : Math.pow(1 + r / 100, 12) - 1;

    let saldoPendiente = p;
    let rendimientoTotal = 0;
    const data: DataTableEntry[] = [];

    for (let i = 1; i <= n; i++) {
      const interesPeriodo = saldoPendiente * periodicRate;
      const valorFuturo = saldoPendiente + interesPeriodo + c;
      const rendimientoPeriodo = valorFuturo - saldoPendiente - c;

      data.push({
        periodo: i,
        saldo: valorFuturo.toFixed(2),
        rendimientoPeriodo: rendimientoPeriodo.toFixed(2),
        rendimientoAcumulado: (rendimientoTotal + rendimientoPeriodo).toFixed(2),
      });

      rendimientoTotal += rendimientoPeriodo;
      saldoPendiente = valorFuturo;
    }

    navigate('/tabla-inversion', {
      state: {
        data,
        unidadPeriodo,
        rendimientoAcumulado,
        totalIntereses,
        totalPagado,
      },
    });
  };

  const volver = () => {
    navigate('/');
  };

  return (
    <div>
     
      <h2 className="enunciado">Datos introducidos</h2>
      <p className="labelText">Capital: <span className="resultText">{principal}</span></p>
      <p className="labelText">Tasa de Interés: <span className="resultText">{rate}%</span></p>
      <p className="labelText">Período: <span className="resultText">{time} {unidadPeriodo}</span></p>
      <p className="labelText">Contribuciones anuales: <span className="resultText">{contributions}</span></p>

      <h2 className="enunciado">Resultado</h2>
      <p className="labelText">Valor futuro: <span className="resultText">{result}</span></p>
      <p className="labelText">Rendimiento de la inversión: <span className="resultText">{ganancia}</span></p>

      <button onClick={AccesoTabla} className="touchableButton">Acceso a Tabla</button>
      <button onClick={volver} className="touchableButtonV">VOLVER</button>

     
    </div>
  );
}
