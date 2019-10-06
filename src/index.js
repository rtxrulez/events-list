import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createStore from "./store/store";
import { getEvents } from "./store/reducers/reducers";
import { Provider, connect } from "react-redux";
import {addEvent} from "./store/actions/events/eventsAction"

const store = createStore();

const mapStateToProps = store => ({
  eventlist: getEvents(store)
});

const mapDispatchToProps = {
  addEvent: addEvent
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
