import { Element } from 'react-faux-dom';
import * as d3 from "d3";
import React, { useState, useEffect} from "react";
import Home from './Pages/Home.js'
import SimpleGraph from './Components/SimpleGraph';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Home />
          {/* <SimpleGraph /> */}
        </header>
      </div>

  );
}

export default App;