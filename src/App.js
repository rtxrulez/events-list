import React from "react";
import "./App.scss";

import Modal from "./Modal/Modal";

class App extends React.Component {
  state = {
    modal: true
  };

  render() {
    let { modal } = this.state;

    return (
      <div className="App">
        {modal ? <Modal /> : ""}
        <header className="header">
          <h1>Мероприятия</h1>
        </header>
        <section className="list">
          <div className="list__header">
            <div className="list__header-control">
              <button className="btn btn-transparent">-</button>
              <button className="btn btn-transparent">+</button>
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
              <div className="list__item">
                <div className="list__item-checkbox">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="cr"></div>
                  </label>
                </div>
                <div className="list__item-name">Мероприятие 1</div>
                <div className="list__item-date">20.04.2018</div>
                <div className="list__item-location">Саратов</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
