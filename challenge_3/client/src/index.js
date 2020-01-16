import React from 'react';
import ReactDOM from 'react-dom';
import Ball from '../dist/components/ball.js'
import Pins from '../dist/components/pins.js'



class App extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        
        return(
        <div>
            <Ball />
            <Pins />
        </div>
        )
        }
    }
     
export default App

ReactDOM.render(<App />, document.getElementById("app"));