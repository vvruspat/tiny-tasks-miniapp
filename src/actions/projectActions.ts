import { Dispatch } from "react";
import { createProject, deleteProject, getProjectList } from "../api";
import { EVENTS } from "../constants/events";
import { ProjectType } from '../types/project';

// TODO: Fix any
export const getProjectsAction = () => async (
  dispatch: Dispatch<{ type: EVENTS; payload?: any }>
) => {
  dispatch({
    type: EVENTS.GET_PROJECTS_FETCH,
    payload: {},
  });

  getProjectList()
    .then((result) => {
      console.log("res", result);
      dispatch({
        type: EVENTS.GET_PROJECTS_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: EVENTS.GET_PROJECTS_FAILED,
        payload: error,
      });
    });
};

export const removeProjectAction = (_id: string) => async (
  dispatch: Dispatch<{ type: EVENTS; payload?: any }>
) => {
  dispatch({
    type: EVENTS.DELETE_PROJECT_FETCH,
    payload: {},
  });

  deleteProject(_id)
    .then((result) => {
      console.log("res", result);
      dispatch({
        type: EVENTS.DELETE_PROJECT_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: EVENTS.DELETE_PROJECT_FAILED,
        payload: error,
      });
    });
};

export const createProjectAction = (params: ProjectType) => async (
  dispatch: Dispatch<{ type: EVENTS; payload?: any }>
) => {
  dispatch({
    type: EVENTS.CREATE_PROJECT_FETCH,
    payload: {},
  });

  createProject(params)
    .then((result) => {
      console.log("res", result);
      dispatch({
        type: EVENTS.CREATE_PROJECT_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: EVENTS.CREATE_PROJECT_FAILED,
        payload: error,
      });
    });
};
