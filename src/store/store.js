import { createStore, compose } from "redux";
import rootReducer from './reducers/reducers'

export default (initialStore) =>
  createStore(
    rootReducer,
    initialStore,
    compose(
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
