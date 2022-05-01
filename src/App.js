import Charts from './Components/Charts';
import * as d3 from "d3";
import React, { useState, useEffect} from "react";
import Home from './Pages/Home';
import { drawChart } from './Components/BarChart';

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//           <Home />
//           <BarChart />
//       </header>

const App = () => {
  // const data = useState([
  //   { date: 0, value: 1 },
  //   { date: 1, value:  20},
  //   { date: 2, value: 30},
  //   { date: 3, value: 40 },
  //   { date: 4, value: 50},

  // ]);
   const generateData = (value, length = 5) =>
     d3.range(length).map((item, index) => ({
      date: index,
      value: 200,
    }));

  // const [data, setData] = useState();
  
  const [data, setData] = useState(generateData(0));
  // const changeData = () => {
  //   setData(generateData());
  // };

  useEffect(
    () => {
      setData(generateData());
    },
    []
  );

  return (
    <div>
        <span className="label">Multiple attackers</span>
        <Home />
        <Charts 
          data={data}
          width={200}
          height={200}
          innerRadius={0}
          outerRadius={100}
        />
        <BarChart />
      </div>

  );
}

export default App;