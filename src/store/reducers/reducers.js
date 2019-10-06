import { combineReducers } from "redux";
import { eventlist } from './event'




export default combineReducers({
  eventlist
})

// selectors
export const getEvents = state => {
  return state.eventlist
}