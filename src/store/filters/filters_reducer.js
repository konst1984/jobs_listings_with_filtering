import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from "./filters_actions";

export const filters_reducer = (state = [], action) => {
  if (action.type === ADD_FILTER) {
    if (!state.includes(action.filter)) {
      return [...state, action.filter];
    }
    return state;
  }
  if (action.type === REMOVE_FILTER) {
    return state.filter((item) => item !== action.filter);
  }
  if (action.type === CLEAR_FILTER) {
    return [];
  }
  return state;
};
