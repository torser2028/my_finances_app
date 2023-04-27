import React from 'react';
import Header from './components/Header';
import './App.css';
import RoutesComponent from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesComponent />
    </div>
  );
}

export default App;
