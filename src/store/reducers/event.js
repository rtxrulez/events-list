import {
  ADD_EVENT,
  CHECK_EVENT,
  UNCHECK_EVENT,
  REPLACE_EVENTS
} from "../actions/events/eventsType";

export const eventlist = (state = [], action) => {
  let newState = [...state];
  
  switch (action.type) {
    case ADD_EVENT:
      return [...newState, action.payload];

    case REPLACE_EVENTS:
      return [...action.payload];

    case CHECK_EVENT: {
      newState[action.payload].checked = true;
      return newState;
    }

    case UNCHECK_EVENT: {
      newState[action.payload].checked = false;
      return newState;
    }

    default:
      return newState;
  }
};
