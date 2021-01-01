import { queryToObject } from "../utils/helpers";

export const authData = queryToObject(window.location.search.slice(1));
