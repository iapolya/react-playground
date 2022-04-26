import React, { useEffect, ChangeEventHandler } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import '../containers/App.css';

import { Header } from './Header';
import { ICat, ISearch } from "../types";

export interface IMainProps extends ISearch {
  cats: Array<ICat>,
  isPending: Boolean,
  onRequestCats: Function
}

const MainPage = (props: IMainProps) => {
  const { searchField, onSearchChange, cats, isPending } = props;

  useEffect(() => {
    props.onRequestCats();
  }, []);

  let filteredCats = (cats: Array<ICat>) =>
    cats.filter((cat: ICat) => {
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
