import {
  ADD_EVENT,
  CHECK_EVENT,
  UNCHECK_EVENT,
  REPLACE_EVENTS,
  FETCH_EVENTS_REQUEST,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
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
        eventList: [...newState]
      };
    }

    case UNCHECK_EVENT: {
      newState[action.payload].checked = false;
      return {
        ...state,
        eventList: [...newState]
      };
    }

    case FETCH_EVENTS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    }

    case FETCH_EVENTS_SUCCESS: {
      return {
        ...state,
        eventList: action.payload,
        isFetching: false,
        isFetched: true
      };
    }

    case FETCH_EVENTS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: action.error
      };
    }

    default:
      return {
        ...state,
        eventList: newState
      };
  }
};
