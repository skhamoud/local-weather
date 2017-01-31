import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props); 
    this.handleSearch = this.handleSearch.bind(this);
  }
  render() {
    return <input type="search" name="search" placeholder="City" onKeyPress={this.handleSearch}/>;
  }
  handleSearch(e) {
    let city = e.target.value || "london";
    // this.props.onSearch(city);
    if(e.key === "Enter" ) this.props.onSearch(city);

  }
}
export default Search;