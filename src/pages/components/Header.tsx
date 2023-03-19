import React from "react";

import { Search } from "./modules";
import { HeaderProps } from "../types";

const Header = (props: HeaderProps) => {
  const { searchItem, setSearchItem, setSortItem, setSortByItem, sortByItem } =
    props;
  return (
    <div className="header">
      GitHub Search Repository
      <Search
        {...{
          searchItem,
          setSearchItem,
          setSortItem,
          setSortByItem,
          sortByItem,
        }}
      />
    </div>
  );
};

export default Header;
