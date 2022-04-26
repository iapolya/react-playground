import React, { ChangeEventHandler } from 'react';

type Props = {
  searchField: string;
  searchChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchField, searchChange }: Props) => {
  return (
    <div className="pa2">
      <input
        aria-label="search-cats"
        className="pa3 b--green bg-lightest-blue"
        value={searchField}
        type="search"
        placeholder="search cats"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
