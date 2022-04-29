import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

 const Charts = (props) => {
    
  const ref = useRef(null);
  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = ['#5878A3','#E49343','#D0605E','#85B5B1','#6B9F57']
  const format = d3.format(".2f");

  useEffect(
    () => {
      if (props.data){

      
      const data = createPie(props.data);
      console.log(data);
      const group = d3.select(ref.current);
      const groupWithData = group.selectAll("g.arc").data(data);

      groupWithData.exit().remove();

      const groupWithUpdate = groupWithData
        .enter()
        .append("g")
        .attr("class", "arc");

      const path = groupWithUpdate
        .append("path")
        .merge(groupWithData.select("path.arc"));

      path
        .attr("class", "arc")
        .attr("d", createArc)
        .attr("fill", (d, i) => colors[i]);

      const text = groupWithUpdate
        .append("text")
        .merge(groupWithData.select("text"));

      };
    },

    [props.data]
  );

  return (
    <div className="charts-container">
      <div className="row">
        <p className="charts-item"><svg width={props.width} height={props.height}>
          <g
            ref={ref}
            transform={`translate(${props.outerRadius} ${props.outerRadius})`}
          />
        </svg></p>
      </div>
    </div>
  );
};
export default Charts;