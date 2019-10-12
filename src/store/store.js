import { createStore, compose, applyMiddleware } from "redux";
import { FETCH_EVENTS_REQUEST } from "./actions/events/eventsType";
import {
  fetchEventsSuccess,
  fetchEventsFailure
} from "./actions/events/eventsAction";
import rootReducer from "./reducers/reducers";

/**
 * Логирует все действия и состояния после того, как действия будут отправлены.
 */
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

const fetchEvents = store => next => action => {
  const result = next(action);

  if (action.type === FETCH_EVENTS_REQUEST) {
    fetch("/data.json", {
      method: "GET"
      // mode: "cors"
    })
      .then(response => {
        return response.json();
      })
      .then(events => {
        store.dispatch(fetchEventsSuccess(events));
      })
      .catch(error => {
        store.dispatch(fetchEventsFailure(error));
      });
  }
  return result;
};

export default initialStore =>
  createStore(
    rootReducer,
    initialStore,

    compose(
      applyMiddleware(fetchEvents, logger),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
