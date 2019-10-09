import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createStore from "./store/store";
import { getEvents, getSettings } from "./store/reducers/reducers";
import { Provider, connect } from "react-redux";
import {addEvent, checkEvent, unCheckEvent} from "./store/actions/events/eventsAction"
import {unCheckEventAll, checkEventAll, searchQuery} from './store/actions/settings/settingsAction'


const store = createStore();

const mapStateToProps = store => ({
  eventlist: getEvents(store),
  settings: getSettings(store)
});

const mapDispatchToProps = {
  addEvent: addEvent,
  checkEvent: checkEvent,
  unCheckEvent: unCheckEvent,
  checkEventAll: checkEventAll,
  unCheckEventAll: unCheckEventAll,
  searchQuery: searchQuery
};

let AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppWithRedux />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
