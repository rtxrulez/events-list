import {
  ADD_EVENT,
  CHECK_EVENT,
  UNCHECK_EVENT
} from "../actions/events/eventsType";

export const eventlist = (state = [], action) => {
  console.log("state", state);
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];
    case CHECK_EVENT:
      return state[action.payload] = {
        ...state[action.payload],
        checked: true
      };

    case UNCHECK_EVENT:
      return state[action.payload] = {
        ...state[action.payload],
        checked: false
      };

    default:
      return state;
  }
};
