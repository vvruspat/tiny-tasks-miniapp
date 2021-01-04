import { ProjectType } from "../../types/project";
import { EVENTS } from "../../constants/events";
import { ProjectReducerActions, ProjectsReducerState } from './types';

export const projectsInitialState: ProjectsReducerState = {
  projects: [],
  error: null,
  isFetching: false,
};

// TODO: fix any
export default function ProjectsReducer(
  state: ProjectsReducerState = projectsInitialState,
  action: ProjectReducerActions,
) {
  switch (action.type) {
    case EVENTS.GET_PROJECTS_SUCCESS: {
      console.log("state", action.payload);
      state = {
        error: null,
        isFetching: false,
        projects: action.payload as ProjectType[]
      };

      return state;
    }

    case EVENTS.CREATE_PROJECT_SUCCESS: {
      state.projects.push(action.payload);

      return state;
    }

    case EVENTS.DELETE_PROJECT_SUCCESS: {
      const project = action.payload;

      state.projects = state?.projects?.filter((_project) => !(project._id === _project._id)) ?? [];

      return state;
    }

    default:
      return state;
  }
}
