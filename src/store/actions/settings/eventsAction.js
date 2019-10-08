import { CHECK_EVENT_ALL, UNCHECK_EVENT_ALL } from "./eventsType";


export const checkEventAll = (payload) => {
  return {
    type: CHECK_EVENT_ALL,
    payload 
  }
}

export const unCheckEventAll = (payload) => {
  return {
    type: UNCHECK_EVENT_ALL,
    payload
  }
}