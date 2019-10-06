import { ADD_EVENT} from "./eventsType"

export const addEvent = payload => {
  return {
    type: ADD_EVENT,
    payload
  }
}