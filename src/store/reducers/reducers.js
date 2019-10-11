import { combineReducers } from "redux";
import { eventlist } from "./event";
import { settings } from "./settings";

export default combineReducers({
  eventlist,
  settings
});

// selectors
export const getEvents = state => {
  return state.eventlist.eventList;
};

export const getSettings = state => {
  return state.settings;
};

export const getFetchData = state => {
  return {
    ...state.eventlist
  }
}