import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { ProjectType } from "../types/project";
import { projectsInitialState } from "./ProjectsReducer";
import rootReducer from "./rootReducer";

export type StateType = {
  projects: ProjectType[];
};

export const preloadedState: StateType = {
  projects: projectsInitialState,
};

export default function configureStore(state: StateType = preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, state, middlewareEnhancer);

  return store;
}
