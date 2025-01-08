import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrincipalStack from './Navigation';


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
