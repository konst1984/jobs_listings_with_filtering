import { ADD_POSITIONS } from "./position_actions";

export const position_reducer = (state = [], action) => {
  if (action.type === ADD_POSITIONS) {
    return action.positions;
  }
  return state;
};
