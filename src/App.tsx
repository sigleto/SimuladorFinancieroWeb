import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrincipalStack from './Navigation';

const App: React.FC = () => {
  useEffect(() => {
    // Establecer el título
    document.title = "Simuladores Financieros";

    // Establecer la descripción
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription instanceof HTMLMetaElement) {
      metaDescription.content = 'Herramientas avanzadas para optimizar tus decisiones financieras. Simuladores de préstamos, ahorros, inversiones y más.';
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Herramientas avanzadas para optimizar tus decisiones financieras. Simuladores de préstamos, ahorros, inversiones y más.';
      document.head.appendChild(newMetaDescription);
    }

    // Establecer Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Simuladores Financieros' },
      { property: 'og:description', content: 'Optimiza tus finanzas con nuestros simuladores avanzados.' },
      { property: 'og:image', content: '/path/to/your/logo.png' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (element instanceof HTMLMetaElement) {
        element.content = tag.content;
      } else {
        const newElement = document.createElement('meta');
        newElement.setAttribute('property', tag.property);
        newElement.content = tag.content;
        document.head.appendChild(newElement);
      }
    });

    // Establecer el favicon
    const existingLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (existingLink) {
      existingLink.href = '/favicon.ico';
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/favicon.ico';
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <PrincipalStack />
        </main>
      </div>
    </Router>
  );
};

export default App;
