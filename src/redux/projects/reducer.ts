import { EVENTS } from "../../constants/events";
import { ProjectReducerActions, ProjectsReducerState } from "./types";

export const projectsInitialState: ProjectsReducerState = {
  projects: [],
  error: null,
  isFetching: false,
};

export default function ProjectsReducer(
  state: ProjectsReducerState = projectsInitialState,
  action: ProjectReducerActions
) {
  switch (action.type) {
    case EVENTS.GET_PROJECTS_SUCCESS: {
      console.log("state", action.payload);
      state = {
        error: null,
        isFetching: false,
        projects: action.payload,
      };

      return state;
    }

    case EVENTS.CREATE_PROJECT_SUCCESS: {
      state.projects.push(action.payload);

      return state;
    }

    case EVENTS.UPDATE_PROJECT_SUCCESS: {
      const project = action.payload;

      state.projects =
        state?.projects?.filter(
          (_project) => !(project._id === _project._id)
        ) ?? [];
      state.projects.push(action.payload);

      return state;
    }

    case EVENTS.DELETE_PROJECT_SUCCESS: {
      const project = action.payload;

      state.projects =
        state?.projects?.filter(
          (_project) => !(project._id === _project._id)
        ) ?? [];

      return state;
    }

    case EVENTS.GET_PROJECTS_FETCH:
    case EVENTS.GET_PROJECT_FETCH:
    case EVENTS.UPDATE_PROJECT_FETCH:
    case EVENTS.DELETE_PROJECT_FETCH:
    case EVENTS.CREATE_PROJECT_FETCH: {
      state = {
        ...state,
        error: null,
        isFetching: true,
      };

      return state;
    }

    case EVENTS.GET_PROJECTS_FAILED:
    case EVENTS.GET_PROJECT_FAILED:
    case EVENTS.UPDATE_PROJECT_FAILED:
    case EVENTS.DELETE_PROJECT_FAILED:
    case EVENTS.CREATE_PROJECT_FAILED: {
      state = {
        ...state,
        error: action.payload,
        isFetching: false,
      };

      return state;
    }

    default:
      return state;
  }
}
