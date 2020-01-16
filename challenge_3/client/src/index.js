import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{
    constructor(props){
        super(props)
        
    }
 
    

    render(){
        
        return(
        <div className='something'>Lets Bowl</div>
        )
        }
    }
     
export default App

ReactDOM.render(<App />, document.getElementById("app"));