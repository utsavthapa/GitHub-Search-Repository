import React from "react";

import { SearchProps } from "../../types";

const Search = (props: SearchProps) => {
  const { searchItem, setSearchItem } = props;
  console.log("searchItem ===>", searchItem);

  return (
    <div className="search">
      <input
        value={searchItem}
        placeholder="Search Repositories"
        type="text"
        onChange={(e) => {
          setSearchItem(e.target.value?.trim());
        }}
        // onChange={(event) => {
        //   onChange(event);
        // }}
        // onKeyUp={(event) => {
        //   onChange(event);
        // }}
        // onPaste={(event) => {
        //   onChange(event);
        // }}
      />
    </div>
  );
};

export default Search;
