import {
  ADD_EVENT,
  CHECK_EVENT,
  UNCHECK_EVENT
} from "../actions/events/eventsType";

export const eventlist = (state = [], action) => {
  let newState = Object.extend(state, {});
  switch (action.type) {
    case ADD_EVENT:
      break;
    case CHECK_EVENT:
      newState[action.payload].checked = true;
      break;
    case UNCHECK_EVENT:
      newState[action.payload].checked = false;
      break;
  }
  
  return newState;
};
