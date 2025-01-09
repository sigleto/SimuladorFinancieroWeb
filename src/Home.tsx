import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartLine, FaCalculator, FaExchangeAlt, FaPiggyBank, FaChartBar, FaUserClock } from 'react-icons/fa';
import './Estilos/EstiloHome.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => navigate(path);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const features = [
    { icon: <FaCalculator />, text: "Simulador de Préstamos", path: "/calculoPrestamo" },
    { icon: <FaPiggyBank />, text: "Simulador de Ahorros", path: "/simuladorAhorros" },
    { icon: <FaChartLine />, text: "Simulador de Inversiones", path: "/simuladorInversiones" },
    { icon: <FaExchangeAlt />, text: "Conversor de Divisas", path: "/conversorDivisas" },
    { icon: <FaChartBar />, text: "Cotizador de Acciones NY", path: "/cotizadorAcciones" },
    { icon: <FaUserClock />, text: "Simulador de Jubilación", path: "/jubilacion" }
  ];

  const benefits = [
    "Maximizar ahorros y rendimientos.",
    "Planificar préstamos con pagos asequibles.",
    "Diversificar inversiones con datos realistas.",
    "Minimizar riesgos financieros con mejor información.",
    "Preparar un plan sólido para la jubilación."
  ];

  return (
    <motion.div 
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <header className="home-header">
        <h1 className="main-title">Bienvenido a Simuladores Financieros</h1>
        <p className="subtitle">La clave para optimizar tus decisiones financieras</p>
      </header>

      <main className="main-content">
        <section className="description-section">
          <h2 className="section-title">¿Qué ofrecemos?</h2>
          <p className="description">
            Descubre herramientas avanzadas para mejorar tus finanzas personales. Desde cálculos de préstamos hasta proyecciones de jubilación, ofrecemos soluciones intuitivas para decisiones informadas en cada etapa de tu vida financiera.
          </p>
        </section>

        <section className="features-section">
          <h2 className="section-title">Simuladores Destacados</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(feature.path)}
              >
                <span className="feature-icon">{feature.icon}</span>
                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2 className="section-title">¿Por qué usar nuestros simuladores?</h2>
          <p className="benefits-text">
            Decisiones financieras inteligentes son clave para tus metas a corto y largo plazo. Nuestros simuladores ayudan a:
          </p>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="benefit-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {benefit}
              </motion.li>
            ))}
          </ul>
        </section>

        <motion.button 
          onClick={() => handleNavigation('/herramientas')} 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explorar Todos los Simuladores
        </motion.button>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 Finanzas Inteligentes. Diseñado para potenciar tu futuro financiero.</p>
      </footer>
    </motion.div>
  );
};

export default Home;
