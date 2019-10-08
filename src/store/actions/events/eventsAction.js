import { ADD_EVENT, CHECK_EVENT, UNCHECK_EVENT, REPLACE_EVENTS} from "./eventsType"

export const addEvent = payload => {
  return {
    type: ADD_EVENT,
    payload
  }
}

export const replaceEvents = payload => {
  return {
    type: REPLACE_EVENTS,
    payload
  }
}

export const checkEvent = payload => {
  return {
    type: CHECK_EVENT,
    payload
  }
}

export const unCheckEvent = payload => {
  return {
    type: UNCHECK_EVENT,
    payload
  }
}