import {
  ADD_EVENT,
  CHECK_EVENT,
  UNCHECK_EVENT,
  REPLACE_EVENTS
} from "../actions/events/eventsType";

export const eventlist = (state = [], action) => {
  console.log("state", state);
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload];

    case REPLACE_EVENTS:
      return [...action.payload]

    case CHECK_EVENT:
      const stateCheck = [...state];
      stateCheck[action.payload].checked = true;
      return stateCheck;

    case UNCHECK_EVENT:
      const stateCheckFalse = [...state];
      stateCheckFalse[action.payload].checked = false;
      return stateCheckFalse;

    default:
      return state;
  }
};
