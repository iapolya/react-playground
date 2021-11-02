import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input className="pa3 b--green bg-lightest-blue" value={searchField} type="search" placeholder="search cats"
             onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;