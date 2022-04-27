import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

export const TeeGraph = () => {

    
    // BAR GRAPH WITH COUNTER
    const [data] = useState([200, 250, 60, 175, 100]);
    const svgRef = useRef();

    useEffect(() => {
        // set up svg container
        const w = 400;
        const h = 300;
        const svg = d3.select(svgRef.current)
            .text('Attackers Gender')
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('margin-top', '75px');

        // setting the scaling
        const xScale = d3.scaleBand()
            .domain(data.map((val, i) => i ))
            .range([0, w])
            .padding(0.5);
        const yScale = d3.scaleLinear()
            .domain([0, h])
            .range([h, 0])


        // setting the axis
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length);
        const yAxis = d3.axisLeft(yScale)
            .ticks(5); 
        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${h})`);
        svg.append('g')
            .call(yAxis);

        // setting the svg data
        svg.selectAll('.bar')
            .data(data)
            .join('rect')
                .attr('x', (v, i) => xScale(i))
                .attr('y', yScale)
                .attr('width', xScale.bandwidth())
                .attr('height', val => h - yScale(val)); 

    }, [data]);

    return (
        <div className="tee-container">
            <div className="row">
                <div className="tee-item">
                    <svg ref={svgRef}></svg>
                </div>
            </div>
        </div>
    );
}

export default TeeGraph;