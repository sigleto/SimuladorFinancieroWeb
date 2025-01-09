import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa los componentes correctamente tipados
import Home from './Home';
import Herramientas from './Herramientas';
import CalculadoraAhorros from './enlaces/CalculadoraAhorros';
import RentabilidadAcciones from './enlaces/RentabilidadAcciones';
import SimuladorJubilacion from './enlaces/SimuladorJubilacion';
import CalculadoraPrestamos from './enlaces/CalculadoraPrestamo';
import ConversorDivisas from './enlaces/ConversorDivisas';
import TablaAmortizacion from './Anexos/TablaPrestamo';
import DiasJubilacion from './Anexos/DiasJubilacion';
import CalculadoraInversiones from './enlaces/CalculadoraInversiones';
import ResultadosPrestamo from './Anexos/ResultadosPrestamo';
import ResultadoJubilacion from './Anexos/ResultadoJubilación';
import ResultadoInversiones from './Anexos/ResultadoInversiones';
import ResultadoAhorro from './Anexos/ResultadoAhorro';
import TablaInversion from './Anexos/TablaInversion';
import DescargoResponsabilidad from './Anexos/DescargoResponsabilidad';
import PoliticaPrivacidad from './Anexos/PoliticaPrivacidad';

const PrincipalStack: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/herramientas" element={<Herramientas />} />
      <Route path="/prestamo" element={<CalculadoraPrestamos />} />
      <Route path="/ahorros" element={<CalculadoraAhorros />} />
      <Route path="/divisa" element={<ConversorDivisas />} />
      <Route path="/acciones" element={<RentabilidadAcciones />} />
      <Route path="/jubilacion" element={<SimuladorJubilacion />} />
      <Route path="/tabla" element={<TablaAmortizacion />} />
      <Route path="/dias-jubilacion" element={<DiasJubilacion />} />
      <Route path="/calculadora-inversiones" element={<CalculadoraInversiones />} />
      <Route path="/resultados-prestamo" element={<ResultadosPrestamo />} />
      <Route path="/resultado-jubilacion" element={<ResultadoJubilacion />} />
      <Route path="/resultado-inversiones" element={<ResultadoInversiones />} />
      <Route path="/resultado-ahorro" element={<ResultadoAhorro />} />
      <Route path="/tabla-inversion" element={<TablaInversion />} />
      <Route path="/politica" element={<PoliticaPrivacidad />} />
      <Route path="/descargo" element={<DescargoResponsabilidad/>} />
    </Routes>
  );
};

export default PrincipalStack;
