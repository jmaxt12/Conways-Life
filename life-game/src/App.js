import React from 'react';
import './App.css';

import Grid from './components/grid/Grid';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conway's Game of Life</h1>
      </header>
      <Grid />
      <About />
    </div>
  );
}

export default App;
