import React from "react";
import "./Modal.scss";

function Modal() {
  return (
    <div className="backdrop">
      <div className="Modal">
        <div className="Modal__header">
          <h1>Добавить мероприятие</h1>
        </div>
        <div className="Modal__content">
          <input type="text" className="form-control" placeholder="Название" />
          <input type="text" className="form-control" placeholder="Дата" />
          <select className="form-control">
            <option value="" className="">
              Саратов
            </option>
          </select>
        </div>
        <div className="Modal__footer">
          <button className="btn btn-transparent">Отмена</button>
          <button className="btn btn-transparent">Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
