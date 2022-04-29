import React from "react";
import { select, scaleBand, scaleLinear } from 'd3';

function Responsive(Component) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = { width: undefined, height: undefined };
            this.resize = this.resize.bind(this);
        }

        componentDidMount() {
            window.addEventListener('resize', this.resize);
            this.resize();
        }

        resize() {
            const node = this.node;
            const bounds = node.getBoundingClientRect();
            const width = bounds.width;
            const height = bounds.height;
            this.setState({ width, height }); 
        }

        render() {
            const { width, height } = this.state;
            return (
                <div 
                    style={{ width: '100%', height: '100%' }}
                    ref= {node => this.node = node}
                >
                    {
                        width && <Component 
                            width={width}
                            height={height}
                        />
                    }
                </div>
            );
        }
    }
}

class BarChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { gender: "male", number: 70 },
                { gender: "female", number: 10 },
                { gender: "transgender male", number: 20 },
                { gender: "transgender female", number: 5 },
                { gender: "I don't know", number: 30 }
            ],
        };
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', );
        this.draw();
    }

    draw() {
        const node = select(this.node);
        const { width: w, height: h } = this.props;
        // const w = bounds.width;
        // const h = bounds.height;
        const data = this.state;

        const xscale = scaleBand();
        xscale.domain(data.map(d => d.year));
        xscale.padding(0.2);
        xscale.range([0, w]);

        const yscale = scaleLinear();
        xscale.domain([0, 100]);
        xscale.range([0, h]);
        const upd = node.selectAll('rect').data(data);
        upd.enter()
            .append('rect')
            .merge(upd)
            .attr('x', d => xscale(d.gender))
            .attr('y', d => h - yscale(d.number))
            .attr('width', xscale.bandWidth())
            .attr('height ', d => yscale(d.number))
            .attr('fill', 'black'); 
    }

    componentDidUpdate() {
        this.draw();
    }

    componentWillMount() {
        window.removeEventListener('resize', this.draw);
    }

    render() {
        const { width, height } = this.state;
        return (
            <svg
                style={{ width: '100%', height: '100%' }}
                ref={node => {
                    this.node = node;
                }}
            >
            </svg>
        );
    }
}

export default Responsive(BarChart);