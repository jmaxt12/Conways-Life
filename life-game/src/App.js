import React from "react";
import "./App.css";

import Grid from "./components/grid/Grid";
import About from "./components/about/About";
import Rules from "./components/rules/Rules";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Conway's Game of Life</h1>
      </header>
      <div className = 'topRow'>
        <Grid />
        <Rules />
      </div>
      <About />
    </div>
  );
}

export default App;
