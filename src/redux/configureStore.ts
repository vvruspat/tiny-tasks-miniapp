import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { projectsInitialState } from "./projects/reducer";
import { ProjectsReducerState } from "./projects/types";
import rootReducer from "./rootReducer";

export type StateType = {
  projects: ProjectsReducerState;
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
