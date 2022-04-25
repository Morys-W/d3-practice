import Charts from './Components/Charts';
<<<<<<< HEAD
import SimpleGraph from './Components/SimpleGraph';
import TeeGraph from './Components/TeeGraph';

=======
import TeeGraph from './Components/TeeGraph';
>>>>>>> 98e627debbb7965539c9120647399929a2a544e0
import * as d3 from "d3";
import React, { useState, useRef, useEffect} from "react";


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
