import {ADD_EVENT} from '../actions/events/eventsType'

export const eventlist = (state = [], action) => {
  console.log('state', state)
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.payload]
    default:
      return state
  }
};