import React, {Component} from "react";
import CardList from "./CardList";
import {cats} from "./cats";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: cats,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>MURRR</h1>
        <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange}/>
        <CardList cats={filteredCats}/>
      </div>
    )
  }
}

export default App;