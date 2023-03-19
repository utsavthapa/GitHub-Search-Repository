import Axios from "./axios-interceptor";
import { TryCatchWrapper, createPathWithPathQuery } from "./axios-helper";

const TRY_CATCH_WRAPPER: Function = TryCatchWrapper.genericTryCatch;

const GET = (path: string) => Axios.get(`${path}`);

export const getWithPathQuery = (path: string, pathQuery: string) =>
  TRY_CATCH_WRAPPER(GET(createPathWithPathQuery(path, pathQuery)));
