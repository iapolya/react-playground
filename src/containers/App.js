import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

const App = () => {
  const [cats, setCats] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setCats(users);
      })
  }, [])

  function onSearchChange(event) {
    setSearchField(event.target.value);
  }

  let filteredCats = cats.filter(cat => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !cats.length ? <h1>Loading</h1> : (
    <div className="tc">
      <h1>MURRR</h1>
      <button onClick={setCount}>Click me!</button>
      <Scroll>
        <ErrorBoundry>
          <SearchBox searchField={searchField} searchChange={onSearchChange}/>
          <CardList cats={filteredCats}/>
        </ErrorBoundry>
      </Scroll>
    </div>
  )
}

export default App;