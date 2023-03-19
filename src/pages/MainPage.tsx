import React, { useState } from "react";
import { Header, Listing } from "./components";
import { GetRepositoriesList } from "../react-query-services";
import { Pagination } from "./components/modules";

const MainPage = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<string>("1");

  const cardPerPage = 15;
  const { data: repositoriesList, isLoading: isLoadingRepositoriesList } =
    GetRepositoriesList(
      `?q=${searchItem}&page=${pageNumber}&per_page=${cardPerPage}&sort=stars&order=desc`
    );

  console.log("repositoriesList?.data", repositoriesList?.data);

  return (
    <div>
      <Header {...{ searchItem, setSearchItem }} />
      {searchItem === "" ? (
        <div className="display-message">
          Start by entering a keyword or phrase related to Repository you are
          looking for
        </div>
      ) : (
        <>
          {isLoadingRepositoriesList ? (
            <div className="display-message">
              Please wait while we load the content for you.
            </div>
          ) : (
            <>
              {repositoriesList === undefined ? (
                <div className="display-message">
                  Please wait while we load the content for you.
                </div>
              ) : (
                <>
                  <Pagination
                    {...{ setPageNumber, cardPerPage }}
                    data={repositoriesList?.data}
                  />
                  <Listing data={repositoriesList?.data} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;
