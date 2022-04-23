import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import './App.css';

const SimpleGraph = () => {
    const [data] = useState([200, 250, 60, 175, 100]);
    const svgRef = useRef();

    return (
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default SimpleGraph;