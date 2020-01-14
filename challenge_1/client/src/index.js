import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            allResults: [],
            results: [],
            pageCount: 10,
            totalPages: 0,
            page: 0
        }
        this.updateSearch = this.updateSearch.bind(this);
        this.searchEvent = this.searchEvent.bind(this);
        this.searchEvent = this.searchEvent.bind(this);
    }

    searchEvent(e){
        e.preventDefault();
        //let date = e.target.parentElement.firstChild.value;
        let date = this.state.search;
        $.get(`http://localhost:3000/events?date=${date}&?_page=1`, function( data ) {
            console.log(data);
            console.log(data.length);
            this.setState({
                allResults: data
            })
            this.setState({
                results: this.state.allResults.slice(this.state.page*10, (this.state.page*10)+10)
            })
            let pgs = Math.ceil(data.length/this.state.pageCount);
            this.setState({
                totalPages: pgs
            })
        }.bind(this))
    }

    handlePageClick(e){
        console.log(e);
        this.setState({
            page: e.selected
        })
        this.setState({
            results: this.state.allResults.slice(e.selected*10, (e.selected*10)+10)
        })
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
                <input class="text" placeholder="YYYY/MM/DD" value={this.state.search} onChange={(e) => {this.updateSearch(e)}}></input>
                <button class="button" onClick={(e) => {this.searchEvent(e)}}>Submit</button>
                </form>
                <h5>Most dates should be searched with the format YYYY/MM/DD.</h5>
                <h5>Some dates can be searched with just the year, Ex: 257.</h5>
                <h5>BC events are searched with a negative year, Ex: -200.</h5>
                <br></br>
                <h2>Results:</h2>
                <ol>
                    {this.state.results.map(event => (
                        <li><p>{JSON.stringify(event)}</p></li>
                    ))}
                </ol>
                <div className="commentBox">
        
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(e) => {this.handlePageClick(e)}}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
            </div>
        
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;