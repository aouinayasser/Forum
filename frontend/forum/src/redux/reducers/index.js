import { combineReducers } from "redux";
import jobSeekerAuthReducer from "./jobSeekerAuthReducer";
import callCenterAuthReducer from "./callCenterAuthReducer";
import clientAuthReducer from "./clientAuthReducer";
import clientPostReducer from "./clientPostReducer";
import callCenterPostReducer from "./callCenterPostReducer";

const rootReducer = combineReducers({
  jobSeekerAuthReducer,
  callCenterAuthReducer,
  clientAuthReducer,
  callCenterPostReducer,
  clientPostReducer,
});

export default rootReducer;
