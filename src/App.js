import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import {
  getEvents,
  getSettings,
  getFetchData
} from "./store/reducers/reducers";
import {
  addEvent,
  checkEvent,
  unCheckEvent,
  fetchEventsRequest
} from "./store/actions/events/eventsAction";
import {
  unCheckEventAll,
  checkEventAll,
  searchQuery
} from "./store/actions/settings/settingsAction";

import Modal from "./Modal/Modal";
import ModalDelete from "./ModalDelete/ModalDelete";

class App extends React.Component {
  state = {};

  componentDidMount() {
    const { addEvent, fetchEventsRequest } = this.props;

    // console.log("props", this.props);
    fetchEventsRequest();
  }

  handleOpenModal = () => {
    this.setState({
      modal: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };

  handleCloseModalDelete = () => {
    console.log("close delete");
    this.props.unCheckEventAll();
    this.setState({
      modalDelete: false
    });
  };

  handleCheck = e => {
    const { checkEvent, unCheckEvent } = this.props;

    if (!e.target.checked) {
      unCheckEvent(parseInt(e.target.value));
    } else {
      checkEvent(parseInt(e.target.value));
    }
  };

  handleCheckAll = e => {
    const {
      checkEvent,
      unCheckEvent,
      eventlist,
      checkEventAll,
      unCheckEventAll
    } = this.props;

    if (e.target.checked) {
      eventlist.map((v, k) => {
        checkEvent(parseInt(k));
        return false;
      });
      checkEventAll();
    } else {
      eventlist.map((v, k) => {
        unCheckEvent(parseInt(k));
        return false;
      });
      unCheckEventAll();
    }
  };

  handleDelete = () => {
    this.setState({
      modalDelete: true
    });
  };

  handleSearch = e => {
    const { searchQuery } = this.props;
    searchQuery(e.target.value);
  };

  render() {
    let { eventlist, settings } = this.props;
    let { isFetching, isFetched } = this.props.fetchData;
    let { searchQuery } = settings;
    let { modal, modalDelete } = this.state;

    let list = (
      <section className="list">
        <div className="list__header">
          <div className="list__header-control">
            <button onClick={this.handleDelete} className="btn btn-transparent">
              -
            </button>
            <button
              onClick={this.handleOpenModal}
              className="btn btn-transparent"
            >
              +
            </button>
          </div>
          <div className="list__search">
            <input
              value={searchQuery}
              onChange={this.handleSearch}
              type="text"
              className="form-control list__search-input"
              placeholder="Поиск"
            />
          </div>
        </div>
        <div className="list__content">
          <div className="list__item list__item--head">
            <div className="list__item-checkbox">
              <label className="checkbox">
                <input
                  onChange={this.handleCheckAll}
                  checked={settings.checkEventAll}
                  type="checkbox"
                />
                <div className="cr"></div>
              </label>
            </div>
            <div className="list__item-name">Название</div>
            <div className="list__item-date">Дата</div>
            <div className="list__item-location">Место проведения</div>
          </div>
          <div className="list__scroll">
            {eventlist.map((v, k) => {
              if (
                v.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
              ) {
                return (
                  <div key={k} className="list__item">
                    <div className="list__item-checkbox">
                      <label className="checkbox">
                        <input
                          onChange={this.handleCheck}
                          value={k}
                          type="checkbox"
                          checked={v.checked}
                        />
                        <div className="cr"></div>
                      </label>
                    </div>
                    <div className="list__item-name">{v.name}</div>
                    <div className="list__item-date">{v.date}</div>
                    <div className="list__item-location">{v.city}</div>
                  </div>
                );
              }
              return false;
            })}
          </div>
        </div>
      </section>
    );

    return (
      <div className="App">
        {modal && <Modal handleClose={this.handleCloseModal} />}
        {modalDelete && (
          <ModalDelete handleClose={this.handleCloseModalDelete} />
        )}
        <header className="header">
          <h1>Мероприятия</h1>
        </header>
        {isFetching ? <div className="loading">Загрузка...</div> : list}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  eventlist: getEvents(store),
  settings: getSettings(store),
  fetchData: getFetchData(store)
});

const mapDispatchToProps = {
  addEvent: addEvent,
  checkEvent: checkEvent,
  unCheckEvent: unCheckEvent,
  checkEventAll: checkEventAll,
  unCheckEventAll: unCheckEventAll,
  searchQuery: searchQuery,
  fetchEventsRequest: fetchEventsRequest
};

let AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppWithRedux;
