import Charts from './Components/Charts';
import SimpleGraph from './Components/SimpleGraph';
import TeeGraph from './Components/TeeGraph';

import * as d3 from "d3";
import React, { useState, useRef, useEffect} from "react";


const App=()=> {
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

  const [data, setData] = useState();
  

  useEffect(
    () => {
      setData(generateData());
    },
    []
  );

  return (
    <div>
        <span className="label">Multiple attackers</span>
        <Charts 
          data={data}
          width={200}
          height={200}
          innerRadius={0}
          outerRadius={100}

        

        />
        <SimpleGraph />
        <TeeGraph />
      </div>

  );
}

export default App;
