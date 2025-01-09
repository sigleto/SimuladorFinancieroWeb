import React from "react";
import { useNavigate } from 'react-router-dom';

const DescargoResponsabilidad: React.FC = () => {
  const navigate = useNavigate();

  const salto = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Hoja de Descargo de Responsabilidad:</h1>
      <p style={styles.parrafo}>
        Esta aplicación es una herramienta de simulación financiera y no debe utilizarse como un servicio financiero. No es un sustituto de la asesoría financiera profesional.

        Esta aplicación no ofrece préstamos personales ni se vincula con ninguna compañía externa que ofrezca préstamos. Tampoco ofrece la tasa de porcentaje anual (APR) ni cargos u otros costos. El usuario debe ingresar la tasa de interés y otra información relevante. Los cálculos son solo estimaciones y pueden no ser precisos.

        Las recomendaciones de esta aplicación no pueden ser adecuadas para su situación financiera y preferencias de riesgo y rendimiento. Siempre debe consultar con un asesor financiero profesional antes de tomar cualquier decisión financiera importante.

        Adiciones específicas para su aplicación

        Cálculo de préstamos:
            Esta aplicación no tiene en cuenta sus circunstancias individuales, como su historial crediticio, ingresos o gastos.
            Los cálculos de esta aplicación se basan en supuestos y pueden no ser exactos.
        Planificación de jubilación:
            Esta aplicación no tiene en cuenta sus objetivos de jubilación individuales, como el monto de dinero que desea ahorrar o cuándo desea jubilarse.
            Los cálculos de esta aplicación se basan en supuestos y pueden no ser exactos.
        Cálculo de posibles ganancias de acciones:
            Esta aplicación no tiene en cuenta el riesgo asociado con la inversión en acciones.
            Los cálculos de esta aplicación se basan en supuestos y pueden no ser exactos.
        Conversor de monedas:
            Las tasas de cambio utilizadas en esta aplicación son solo estimaciones y pueden no ser precisas.
        Cálculo de rendimientos de productos:
            Esta aplicación no tiene en cuenta el riesgo asociado con la inversión en productos financieros.
            Los cálculos de esta aplicación se basan en supuestos y pueden no ser exactos.
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.skipButton} onClick={salto}>
          <span style={styles.buttonText}>VOLVER</span>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    backgroundColor: '#fff',
    maxWidth: '800px',
    margin: '0 auto',
  },
  titulo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    marginTop: '40px',
    color: '#007BFF',
  },
  parrafo: {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'justify' as const,
    marginBottom: '16px',
    color: '#333',
  },
  buttonContainer: {
    marginTop: '20px',
    textAlign: 'center' as const,
    marginBottom: '60px',
  },
  skipButton: {
    backgroundColor: '#007BFF',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    color: '#fff',
    fontSize: '16px',
  },
};

export default DescargoResponsabilidad;
