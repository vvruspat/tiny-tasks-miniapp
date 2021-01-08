import { applyMiddleware, createStore, compose } from "redux";
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

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(state: StateType = preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, state, middlewareEnhancer);

  return store;
}
