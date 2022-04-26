import Charts from './Components/Charts';
import SimpleGraph from './Components/SimpleGraph';
import TeeGraph from './Components/TeeGraph';

import * as d3 from "d3";
import React, { useState, useEffect} from "react";


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

<<<<<<< HEAD
  const [data, setData] = useState();
  
=======
  const [data, setData] = useState(generateData(0));
  // const changeData = () => {
  //   setData(generateData());
  // };
>>>>>>> 01a6fbdae68759465689e374b618e98ae2f37241

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
          className="charts"
          data={data}
          width={200}
          height={200}
          innerRadius={0}
          outerRadius={100}

        

        />
<<<<<<< HEAD
        <TeeGraph 
          className="graphs"
        />
=======
        <SimpleGraph />
        <TeeGraph />
>>>>>>> 141e81445fa7b789d3b665cdc62988b01f00852e
      </div>

  );
}

export default App;
