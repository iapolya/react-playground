import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({cats: users})
      })
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
        <Scroll>
          <SearchBox searchField={this.state.searchField} searchChange={this.onSearchChange}/>
          <CardList cats={filteredCats}/>
        </Scroll>
      </div>
    )
  }
}

export default App;