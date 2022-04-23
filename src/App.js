import Charts from './Components/Charts';
<<<<<<< HEAD
import Graphs from './Components/Graphs';
import * as d3 from "d3";
import React, { useState, useRef, useEffect} from "react";
=======
import SimpleGraph from './Components/SimpleGraph';
import TeeGraph from './Components/TeeGraph';
>>>>>>> bc4c56a766c60183532c9f4752a10e471f046843


const App=()=> {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );

  return (
<<<<<<< HEAD
    <div>
        <span className="label">Multiple attackers</span>
        <Charts 
          data={data}
          width={200}
          height={200}
          innerRadius={0}
          outerRadius={100}
        />
      </div>

=======
    <div className="App">
      <Charts />
      <SimpleGraph />
      <TeeGraph />
    </div>
>>>>>>> bc4c56a766c60183532c9f4752a10e471f046843
  );
}

export default App;
