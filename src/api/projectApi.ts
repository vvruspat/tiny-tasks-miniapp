import { ProjectType } from "../types/project";
import { server, requestHeaders } from "./settings";

async function _fetch<T>(url: string, options: RequestInit): Promise<T | Error> {
  const result = await fetch(url, options);
  const resultData = await result.json();

  if (result.ok) {
    return resultData;
  }

  const error = new Error();

  error.name = result.statusText;
  error.message = resultData.msg;

  throw(error);
}

export const getProjectList = () =>
  _fetch(`${server}/api/project/`, {
    headers: requestHeaders,
    method: "get",
  });

export const getProject = (_id: string) =>
  _fetch(`${server}/api/project/${_id}`, {
    headers: requestHeaders,
    method: "get",
  });

export const deleteProject = (_id: string) =>
  _fetch(`${server}/api/project/${_id}`, {
    headers: requestHeaders,
    method: "delete",
  });

export const createProject = (params: ProjectType) =>
  _fetch(`${server}/api/project/`, {
    headers: requestHeaders,
    method: "post",
    body: JSON.stringify(params),
  });

export const updateProject = (params: ProjectType) =>
  _fetch(`${server}/api/project/${params._id}`, {
    headers: requestHeaders,
    method: "put",
    body: JSON.stringify(params),
  });
