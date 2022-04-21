import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

   handleFilter = (event) => {


   }

    render() {
        return <div className="row">
            <div className="col s12">
            <div className="input-field  ">
                <input 
                    placeholder="search" 
                    type="search" 
                    className="validate" 
                    value={this.state.search}
                    onChange={(e)=> this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                
            </div>
            <div>
                <label>
                    <input class="with-gap" name="type" type="radio" data-type="all" />
                    <span>All</span>
                </label>
                <label>
                    <input class="with-gap" name="type" type="radio" data-type="movie" />
                    <span>Movies</span>
                </label>
                <label>
                    <input class="with-gap" name="type" type="radio" data-type="series" />
                    <span>Series</span>
                </label>
            </div>
            </div>
        </div>
    }

}

export {Search};