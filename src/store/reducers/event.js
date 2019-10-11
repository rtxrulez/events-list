import {
  ADD_EVENT,
  CHECK_EVENT,
  UNCHECK_EVENT,
  REPLACE_EVENTS
} from "../actions/events/eventsType";

const initialState = {
  eventList: [],
  isFetching: false,
  isFetched: false,
  error: null
};

export const eventlist = (state = initialState, action) => {
  console.log("ss", state);
  let newState = [...state.eventList];

  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        eventList: [...newState, action.payload]
      };

    case REPLACE_EVENTS:
      return {
        ...state,
        eventList: [...action.payload]
      };

    case CHECK_EVENT: {
      newState[action.payload].checked = true;
      return {
        ...state,
        eventList: [...action.payload]
      };
    }

    case UNCHECK_EVENT: {
      newState[action.payload].checked = false;
      return {
        ...state,
        eventList: [...action.payload]
      };
    }

    default:
      return {
        ...state,
        eventList: newState
      };
  }
};
