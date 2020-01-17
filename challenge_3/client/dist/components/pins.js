import React from 'react';

class Pins extends React.Component{
    constructor(props){
        super(props)
        
    }
 
    render(){
        
        return(
            <div id="lane">
                <div class='goal'></div>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            <div>
                <span class="sq1"></span>
                <span class="sq1"></span>
                <span class="sq1"></span>
                <span class="sq1"></span>
            </div>
            <div>
                <span class="sq2"></span>
                <span class="sq2"></span>
                <span class="sq2"></span>
            </div>
            <div>
                <span class="sq3"></span>
                <span class="sq3"></span>
            </div>
            <div>
                <span class="sq4"></span>
            </div>
          </div>
        )
        }
    }
     
export default Pins

ReactDOM.render(<App />, document.getElementById("app"));