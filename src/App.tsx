import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrincipalStack from './Navigation';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Simuladores Financieros";
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
