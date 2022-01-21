import { combineReducers } from "redux";
import jobSeekerAuthReducer from "./jobSeekerAuthReducer";
import callCenterAuthReducer from "./callCenterAuthReducer";
import clientAuthReducer from "./clientAuthReducer";
import clientPostReducer from "./clientPostReducer";
import callCenterPostReducer from "./callCenterPostReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  jobSeekerAuthReducer,
  callCenterAuthReducer,
  clientAuthReducer,
  callCenterPostReducer,
  clientPostReducer,
  alertReducer
});

export default rootReducer;
