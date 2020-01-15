import React from 'react';
import Chart from "chart.js";


export default class MyLineGraph extends React.Component {
    constructor(props){
        super(props)
        this.chartRef = React.createRef();
        this.state = {
            data: this.props.data
        }
    }
    
    componentDidMount() {
        
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.state.data.xAxis,
                datasets: [
                    {
                        label: "BTC Price in USD",
                        data: this.state.data.yAxis,
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
