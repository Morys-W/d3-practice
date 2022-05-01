import Charts from '../Components/Charts';
import AxesChart from '../Components/AxesChart';
import { drawChart } from './Components/BarChart';
import Data from '../Components/Data';
import { Element } from 'react-faux-dom';

import * as d3 from "d3";
import React, { useState, useEffect} from "react";


const Home = () => {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));

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
        <AxesChart 
        />
      </div>

  );
}

export default Home;

{/* <PlaceholderGraph 
  width={600}
  height={350}
  data={{
  columns: [
    ['female', 30],
    ['male', 150],
    ['transgender female', 5],
    ['transgender male', 40],
    ["I don't know", 10]
  ],
  type: 'bar',
  }}
/> */}