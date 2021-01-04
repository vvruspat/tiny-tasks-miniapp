import { combineReducers } from "redux";
import ProjectsReducer from "./projects/reducer";

export default combineReducers({
  projects: ProjectsReducer,
});
