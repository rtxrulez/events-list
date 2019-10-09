import React from "react";
import { connect } from "react-redux";
import { addEvent, replaceEvents } from "../store/actions/events/eventsAction";
import "./ModalDelete.scss";
import { getEvents } from "../store/reducers/reducers";

class ModalDelete extends React.Component {
  state = {};

  handleDelete = () => {
    console.log("del");
    const { eventlist, replaceEvents } = this.props;

    let newEventList = eventlist.filter(v => {
      if (v.checked === false) {
        return true;
      }
      return false
    });

    replaceEvents(newEventList);

    this.props.handleClose();
  };

  render() {
    console.log("t", this.props);
    const { handleClose } = this.props;

    return (
      <div className="ModalDeleteWrapper">
        <div onClick={handleClose} className="backdrop"></div>
        <div className="ModalDelete">
          <div className="ModalDelete__header">
            <h1>Удалить мероприятия</h1>
          </div>
          <div className="ModalDelete__content"></div>
          <div className="ModalDelete__footer">
            <button onClick={handleClose} className="btn btn-transparent">
              Отмена
            </button>
            <button onClick={this.handleDelete} className="btn btn-transparent">
              Удалить
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    eventlist: getEvents(store)
  };
};

const mapDispatchToProps = {
  addEvent: addEvent,
  replaceEvents: replaceEvents,
};

const ModalDeleteWitchRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalDelete);

export default ModalDeleteWitchRedux;
