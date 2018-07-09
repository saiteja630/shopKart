import React, { Component } from 'react';
//<h4>Search for your items here</h4>
class Search extends Component {

    render() {

        return(
            <div className="btn-group"> Enter to search here
                <input className="App-search" type='text' />
                 <button className="button" id='search'onClick={()=>console.log('search initiated')}> Search</button>
            </div>

        )
    }

}
export default Search;
