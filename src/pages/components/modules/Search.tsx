import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { SearchProps } from "../../types";

const Search = (props: SearchProps) => {
  const { searchItem, setSearchItem, setSortItem, sortByItem, setSortByItem } =
    props;
  console.log("searchItem ===>", searchItem);

  return (
    <div className="search">
      <button
        onClick={() =>
          setSortByItem(() => {
            return sortByItem === "asc" ? "desc" : "asc";
          })
        }
      >
        {sortByItem === "asc" ? (
          <>
            <FontAwesomeIcon icon={faSortUp} fontSize="20" color="green" />
            <FontAwesomeIcon
              icon={faSortDown}
              fontSize="20"
              color="lightgrey"
            />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faSortUp} fontSize="20" color="lightgrey" />
            <FontAwesomeIcon icon={faSortDown} fontSize="20" color="red" />
          </>
        )}
      </button>
      <select
        onChange={(e) => setSortItem(e.target.value)}
        placeholder="Sort by"
      >
        <option value="stars">Stars</option>
        <option value="watchers">Watchers</option>
        <option value="forks">Forks</option>
      </select>
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
