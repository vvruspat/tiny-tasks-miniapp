import { EVENTS } from '../../constants/events';
import { ProjectType } from '../../types/project';
import { ReducerCommonState } from '../commonTypes';

export type ProjectsReducerState = {
    projects: ProjectType[],
} & ReducerCommonState;
  
type GetProjectListSuccessAction = {
    type: EVENTS.GET_PROJECTS_SUCCESS,
    payload: ProjectType[],
  };
  
  type GetProjectSuccessAction = {
    type: EVENTS.GET_PROJECT_SUCCESS,
    payload: ProjectType,
  };
  
  type CreateProjectSuccessAction = {
    type: EVENTS.CREATE_PROJECT_SUCCESS,
    payload: ProjectType,
  };
  
  type UpdateProjectSuccessAction = {
    type: EVENTS.UPDATE_PROJECT_SUCCESS,
    payload: ProjectType,
  };
  
  type RemoveProjectSuccessAction = {
    type: EVENTS.DELETE_PROJECT_SUCCESS,
    payload: ProjectType,
  };
  
  type GetProjectListFailedAction = {
    type: EVENTS.GET_PROJECTS_FAILED,
    payload: Error,
  };
  
  type GetProjectFailedAction = {
    type: EVENTS.GET_PROJECT_FAILED,
    payload: Error,
  };
  
  type CreateProjectFailedAction = {
    type: EVENTS.CREATE_PROJECT_FAILED
    payload: Error,
  };
  
  type UpdateProjectFailedAction = {
    type: EVENTS.UPDATE_PROJECT_FAILED
    payload: Error,
  };
  
  type RemoveProjectFailedAction = {
    type: EVENTS.DELETE_PROJECT_FAILED,
    payload: Error,
  };
  
  type GetProjectListFetchingAction = {
    type: EVENTS.GET_PROJECTS_FAILED,
  };
  
  type GetProjectFetchingAction = {
    type: EVENTS.GET_PROJECT_FAILED,
  };
  
  type CreateProjectFetchingAction = {
    type: EVENTS.CREATE_PROJECT_FAILED
  };
  
  type UpdateProjectFetchingAction = {
    type: EVENTS.UPDATE_PROJECT_FAILED
  };
  
  type RemoveProjectFetchingAction = {
    type: EVENTS.DELETE_PROJECT_FAILED,
  };
  
  type ProjectReducerActionsSuccess = GetProjectListSuccessAction | GetProjectSuccessAction | CreateProjectSuccessAction | UpdateProjectSuccessAction | RemoveProjectSuccessAction;
  type ProjectReducerActionsFail = GetProjectListFailedAction | GetProjectFailedAction | CreateProjectFailedAction| UpdateProjectFailedAction | RemoveProjectFailedAction;
  type ProjectReducerActionsFetch = GetProjectListFetchingAction | GetProjectFetchingAction | CreateProjectFetchingAction | UpdateProjectFetchingAction | RemoveProjectFetchingAction;
  
  export type ProjectReducerActions = ProjectReducerActionsSuccess | ProjectReducerActionsFail | ProjectReducerActionsFetch;
  