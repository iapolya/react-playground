import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

import { Header } from './Header';

const MainPage = (props) => {
  const { searchField, onSearchChange, cats, isPending } = props;

  useEffect(() => {
    props.onRequestCats();
  }, []);

  let filteredCats = (cats) =>
    cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });

  return (
    <div className="tc">
      <Header />
      {isPending ? (
        <div>loading</div>
      ) : (
        <Scroll>
          <SearchBox searchField={searchField} searchChange={onSearchChange} />
          <CardList cats={filteredCats(cats)} />
        </Scroll>
      )}
    </div>
  );
};

export default MainPage;
