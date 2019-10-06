import React from "react";
import "./Modal.scss";

class Modal extends React.Component {
  state = {
    name: "",
    city: "",
    date: ""
  };

  componentDidMount() {
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  changeDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  changeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  appendEvent = () => {
    const {name, date} = this.state;
    const {addEvent } = this.props

    // if (name === '' && date === '') {
    //   return;
    // }

    addEvent(this.state)
    this.props.handleClose()
  }

  render() {
    const { name, city, date } = this.state;
    const { handleClose } = this.props;

    const cityArr = ["Саратов", "Ижевск", "Киев", "Минск", "Челябинск"];

    return (
      <div className="modalWrapper">
        <div onClick={handleClose} className="backdrop"></div>
        <div className="Modal">
          <div className="Modal__header">
            <h1>Добавить мероприятие</h1>
          </div>
          <div className="Modal__content">
            <input
              onChange={this.changeName}
              value={name}
              type="text"
              className="form-control"
              placeholder="Название"
            />
            <input
              onChange={this.changeDate}
              value={date}
              type="date"
              pattern="\d{1,2}.d{1,2}.d{4}"
              className="form-control"
              placeholder="Дата"
            />
            <select 
              onChange={this.changeCity}
              className="form-control">
              {cityArr.map((v, k) => {
                if (v === city) {
                  return (
                    <option key={k} value={v} selected>
                      {v}
                    </option>
                  );
                } else {
                  return (
                    <option key={k} value={v}>
                      {v}
                    </option>
                  );
                }
              })}
            </select>
          </div>
          <div className="Modal__footer">
            <button onClick={handleClose} className="btn btn-transparent">
              Отмена
            </button>
            <button
              onClick={this.appendEvent}
              className="btn btn-transparent">Добавить</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
