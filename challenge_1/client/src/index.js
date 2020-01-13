import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            results: []
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.searchEvent = this.searchEvent.bind(this);
    }

    searchEvent(e){
        e.preventDefault();
        let date = e.target.parentElement.firstChild.value;
        $.get(`http://localhost:3000/events?date=${date}`, function( data ) {
            console.log(data);
            this.setState({
                results: data
            })
        }.bind(this));
    }

    updateSearch(e){
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h1>Historical Event Finder</h1>
                <h4>Enter a Historical Date to See What Historical Events Took Place at That Time</h4>
                <form>
                <input class="text" placeholder="Search..." value={this.state.search} onChange={(e) => {this.updateSearch(e)}}></input>
                <button class="button" onClick={(e) => {this.searchEvent(e)}}>Submit</button>
                </form>
                <br></br>
                <h2>Results:</h2>
                <ol>
                    {this.state.results.map(event => (
                        <li><p>{JSON.stringify(event)}</p></li>
                    ))}
                </ol>
            </div>
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