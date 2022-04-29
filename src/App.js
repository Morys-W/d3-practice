import React, { useState, useEffect} from "react";
import Home from './Pages/Home.js'
import BarChart from './Components/BarChart';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Home />
          <BarChart />
      </header>
      </div>

  );
}

export default App;