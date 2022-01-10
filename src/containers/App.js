import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { requestRobots, setSearchField } from '../actions';
import { Header } from '../components/Header';

const mapStateToProps = (state) => ({
  searchField: state.searchCats.searchField,
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  error: state.requestCats.error
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestCats: () => dispatch(requestRobots())
});

const App = (props) => {
  const { searchField, onSearchChange, cats, isPending } = props;

  useEffect(() => {
    props.onRequestCats();
  }, []);

  let filteredCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <Scroll>
        <SearchBox searchField={searchField} searchChange={onSearchChange} />
        <CardList cats={filteredCats} />
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
