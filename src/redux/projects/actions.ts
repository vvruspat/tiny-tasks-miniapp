import { Dispatch } from "react";
import {
  createProject,
  deleteProject,
  getProjectList,
  updateProject,
} from "../../api";
import { EVENTS } from "../../constants/events";
import { ProjectType } from "../../types/project";

export const getProjectsAction = () => async (
  dispatch: Dispatch<{ type: EVENTS; payload?: ProjectType[] | Error }>
) => {
  dispatch({
    type: EVENTS.GET_PROJECTS_FETCH,
    payload: [],
  });

  getProjectList()
    .then((result) => {
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

type DeleteProjectActionDispatch =
  | {
      type: EVENTS.DELETE_PROJECT_FETCH;
    }
  | {
      type: EVENTS.DELETE_PROJECT_SUCCESS;
      payload: string;
    }
  | {
      type: EVENTS.DELETE_PROJECT_FAILED;
      payload: Error;
    };

export const removeProjectAction = (_id: string) => async (
  dispatch: Dispatch<DeleteProjectActionDispatch>
) => {
  dispatch({
    type: EVENTS.DELETE_PROJECT_FETCH,
  });

  deleteProject(_id)
    .then((result) => {
      dispatch({
        type: EVENTS.DELETE_PROJECT_SUCCESS,
        payload: _id,
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
  dispatch: Dispatch<{ type: EVENTS; payload?: ProjectType | Error }>
) => {
  dispatch({
    type: EVENTS.CREATE_PROJECT_FETCH,
  });

  createProject(params)
    .then((result) => {
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

export const updateProjectAction = (params: ProjectType) => async (
  dispatch: Dispatch<{ type: EVENTS; payload?: ProjectType | Error }>
) => {
  dispatch({
    type: EVENTS.UPDATE_PROJECT_FETCH,
  });

  updateProject(params)
    .then((result) => {
      dispatch({
        type: EVENTS.UPDATE_PROJECT_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: EVENTS.UPDATE_PROJECT_FAILED,
        payload: error,
      });
    });
};
