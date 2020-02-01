import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as files } from "./files";

const reducers = combineReducers({
  auth,
  files,
});

export default reducers;
