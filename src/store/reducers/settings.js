import { CHECK_EVENT_ALL, UNCHECK_EVENT_ALL } from "../actions/settings/eventsType";

const initialDefault = {
  checkEventAll: false
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

    default:
      return state
  }
};
