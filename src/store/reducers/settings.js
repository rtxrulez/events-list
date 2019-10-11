import {
  CHECK_EVENT_ALL,
  UNCHECK_EVENT_ALL,
  SEARCH_QUERY
} from "../actions/settings/settingsType";

const initialDefault = {
  checkEventAll: false,
  searchQuery: "",
};

export const settings = (state = initialDefault, action) => {
  switch (action.type) {
    case CHECK_EVENT_ALL:
      return {
        ...state,
        checkEventAll: true
      };

    case UNCHECK_EVENT_ALL:
      return {
        ...state,
        checkEventAll: false
      };

    case SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    default:
      return state;
  }
};
