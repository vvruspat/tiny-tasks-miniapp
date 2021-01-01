import { combineReducers } from "redux";
import ProjectsReducer from "./ProjectsReducer";

export default combineReducers({
  projects: ProjectsReducer,
});
