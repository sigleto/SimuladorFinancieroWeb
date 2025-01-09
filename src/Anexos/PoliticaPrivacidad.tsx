import React from "react";
import { useNavigate } from 'react-router-dom';

const PoliticaPrivacidad: React.FC = () => {
  const navigate = useNavigate();

  const salto = () => { navigate("/") }

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.titulo}>Política de privacidad de SimuladorFinanciero:</h1>
        <p style={styles.parrafo}>
          Se ha construido la aplicación Simulador Financiero como una página web gratuita. Este SERVICIO es proporcionado sin costo alguno y está destinado a ser utilizado tal cual. Esta página se utiliza para informar a los visitantes sobre nuestras políticas con respecto a la recopilación, el uso y la divulgación de Información personal si alguien decide utilizar mi Servicio. Si elige usar nuestro Servicio, entonces acepta la recopilación y el uso de información en relación con esta política. La información personal que se recopila se utiliza para proporcionar y mejorar el Servicio. No se usará ni compartirá su información con nadie, excepto como se describe en esta Política de privacidad. Los términos utilizados en esta Política de privacidad tienen los mismos significados que en nuestros Términos y condiciones, a los que se puede acceder en Todo-Trámite a menos que se defina lo contrario en esta Política de privacidad.

          Recopilación y uso de información

          Esta página no recopila ningún tipo de información personal.

          Cookies

          Las cookies son archivos con una pequeña cantidad de datos que se utilizan comúnmente como identificadores únicos anónimos. Estos se envían a su navegador desde los sitios web que visita y se almacenan en la memoria interna de su dispositivo. Este Servicio no utiliza estas 'cookies' de forma explícita. Sin embargo, la aplicación puede usar código y bibliotecas de terceros que usan 'cookies' para recopilar información y mejorar sus servicios. Tiene la opción de aceptar o rechazar estas cookies y saber cuándo se envía una cookie a su dispositivo. Si elige rechazar nuestras cookies, es posible que no pueda utilizar algunas partes de este Servicio.

          Proveedores de servicio

          Podemos emplear empresas e individuos de terceros debido a las siguientes razones:

              Para facilitar nuestro Servicio;
              Para proporcionar el Servicio en nuestro nombre;
              Para realizar servicios relacionados con el Servicio; o
              Para ayudarnos a analizar cómo se utiliza nuestro Servicio.

          Seguridad

          Valoramos tu confianza al proporcionarnos su información personal, por lo que nos esforzamos por utilizar medios comercialmente aceptables para protegerla. Pero recuerda que ningún método de transmisión por Internet, o método de almacenamiento electrónico es 100% seguro y confiable, y no podemos garantizar tu seguridad absoluta.

          Enlaces a otros sitios

          Este Servicio no contiene enlaces a otros sitios.

          Privacidad de los niños

          Estos Servicios no están dirigidos a personas menores de 13 años. No recopilamos a sabiendas información de identificación personal de niños menores de 13 años. En caso de que descubra que un niño menor de 13 años nos ha proporcionado información personal, la eliminaremos inmediatamente de nuestros servidores. Si usted es padre o tutor y sabe que su hijo nos ha proporcionado información personal, comuníquese con nosotros para que podamos tomar las medidas necesarias.

          Cambios a esta Política de privacidad

          Podemos actualizar nuestra Política de privacidad de vez en cuando. Por lo tanto, se le recomienda revisar esta página periódicamente para ver si hay cambios. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Esta política es efectiva a partir del 2023-10-10

          Contáctanos

          Si tienes alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dudes en ponerte en contacto con nosotros en trianabaresapp@gmail.com.
        </p>
      </div>
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

export default PoliticaPrivacidad;
