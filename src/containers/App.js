import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

import {setSearchField} from "../actions";

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

const App = (props) => {
  const [cats, setCats] = useState([]);
  const {searchField, onSearchChange} = props;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setCats(users);
      })
  }, [])


  let filteredCats = cats.filter(cat => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !cats.length ? <h1>Loading</h1> : (
    <div className="tc">
      <h1>MURRR</h1>
      <Scroll>
        <SearchBox searchField={searchField} searchChange={onSearchChange}/>
        <CardList cats={filteredCats}/>
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);