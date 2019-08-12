import { combineReducers } from "redux";
import {
  constants as dashboardConstants,
  reducer as dashboardReducer
} from "../dashboard";

const reducers = combineReducers({
  [dashboardConstants.NAME]: dashboardReducer
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
