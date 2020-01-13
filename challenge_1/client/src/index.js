import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
    constructor(props){
        super(props)
    }

    
    render() {
        return (
            <div>hello</div>
        //     <ReactPaginate
        //   previousLabel={'previous'}
        //   nextLabel={'next'}
        //   breakLabel={'...'}
        //   breakClassName={'break-me'}
        //   pageCount={this.state.pageCount}
        //   marginPagesDisplayed={2}
        //   pageRangeDisplayed={5}
        //   onPageChange={this.handlePageClick}
        //   containerClassName={'pagination'}
        //   subContainerClassName={'pages pagination'}
        //   activeClassName={'active'}
        // />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;