import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PrincipalStack from './Navigation';
import { FaHome } from 'react-icons/fa';
import './Estilos/App.css';

const App: React.FC = () => {
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
