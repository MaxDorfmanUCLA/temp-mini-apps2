import React from 'react';
import ReactDOM from 'react-dom';
import MyLineGraph from '../dist/components/myLineGraph.js';
import $ from 'jquery';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            xAxis: {},
            yAxis: {},
            loaded: false
        }
    }
 
    componentDidMount(){
        $.get('https://api.coindesk.com/v1/bpi/historical/close.json', (data) => {
                console.log(data);
                data = JSON.parse(data);
                this.setState({
                    xAxis: Object.keys(data.bpi),
                    yAxis: Object.values(data.bpi),
                    loaded: true
                })
                console.log(this.state);
        })
    }

    render(){
        
        return(
        <div>
            {this.state.loaded &&
                <div>
                    <h1>BTC Graph</h1>
                    <MyLineGraph data={this.state} /> 
                    <h6><i><em>Powered by Coindesk</em></i></h6>
                </div>
            }
        </div>
        )
        }
    }
     


ReactDOM.render(<App />, document.getElementById("app"));