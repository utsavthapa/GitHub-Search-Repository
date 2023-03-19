import { useQuery } from "react-query";
import { repositoriesApiConstants } from "../web-resource-key-constants";
import { getWithPathQuery } from "../core";

export const GetRepositoriesList = (pathquery: string) =>
  useQuery(["repositoriesList", pathquery], () =>
    getWithPathQuery(repositoriesApiConstants.REPOSITORIES_LIST, pathquery)
  );

export const GetRepositoryDetail = (pathquery: string) =>
  useQuery(["repositoryDetail", pathquery], () =>
    getWithPathQuery(
      repositoriesApiConstants.REPOSITORIES_DETAIL_BASE,
      pathquery
    )
  );
