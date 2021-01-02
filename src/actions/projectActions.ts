import { Dispatch } from "react";
import { deleteProject, getProjectList } from "../api";
import { EVENTS } from "../constants/events";

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
