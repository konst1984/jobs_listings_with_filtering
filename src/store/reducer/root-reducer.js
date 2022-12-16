import { combineReducers } from "redux";
import { position_reducer } from "../positions/position_reducer";
import { filters_reducer } from "../filters/filters_reducer";

export const rootReducer = combineReducers({
  positions: position_reducer,
  filters: filters_reducer,
});
