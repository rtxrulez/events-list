import React from "react";
import "./App.scss";

import Modal from "./Modal/Modal";

class App extends React.Component {
  state = {
    modal: false,
    eventlist: []
  };

  componentDidMount() {
    const { addEvent, eventslist } = this.props;

    addEvent({
      name: "Стрижка сусликов",
      date: "20.06.19",
      city: "Саратов",
      checked: false
    });

    addEvent({
      name: "Гражная распродажа",
      date: "30.06.19",
      city: "Киев",
      checked: true
    });
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

  handleCheck = e => {
    const { checkEvent, unCheckEvent } = this.props;
    console.log("e", e.target.checked);
    if (e.target.checked) {
      unCheckEvent(parseInt(e.target.value))
    } else {
      checkEvent(parseInt(e.target.value))
    }
  };

  render() {
    console.log(this.props);
    let { eventlist } = this.props;
    let { modal } = this.state;

    return (
      <div className="App">
        {modal ? <Modal handleClose={this.handleCloseModal} /> : ""}
        <header className="header">
          <h1>Мероприятия</h1>
        </header>
        <section className="list">
          <div className="list__header">
            <div className="list__header-control">
              <button className="btn btn-transparent">-</button>
              <button
                onClick={this.handleOpenModal}
                className="btn btn-transparent"
              >
                +
              </button>
            </div>
            <div className="list__search">
              <input
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
                  <input type="checkbox" />
                  <div className="cr"></div>
                </label>
              </div>
              <div className="list__item-name">Название</div>
              <div className="list__item-date">Дата</div>
              <div className="list__item-location">Место проведения</div>
            </div>
            <div className="list__scroll">
              {eventlist.map((v, k) => {
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
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
