import { CHECK_EVENT_ALL, UNCHECK_EVENT_ALL, SEARCH_QUERY } from "./settingsType";


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

export const searchQuery = (payload) => {
  return {
    type: SEARCH_QUERY,
    payload
  }
}