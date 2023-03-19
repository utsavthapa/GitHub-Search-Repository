import React from "react";
import { RepoCard } from "./modules";
import { repositoriesList, item } from "../types";

const Listing = (props: repositoriesList) => {
  const { data } = props;
  console.log("data", data);

  return (
    <div className="items-list">
      {data?.items?.map((value: item, idx) => {
        console.log("valuevalue", value);

        return (
          <RepoCard
            idx={idx}
            id={value.id}
            name={value.name}
            full_name={value.full_name}
            owner={value.owner}
            description={value.description}
            stargazers_count={value.stargazers_count}
            watchers={value.watchers}
            forks_count={value.forks_count}
          />
        );
      })}
    </div>
  );
};

export default Listing;
