import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const {
      title,
      handleDelete,
      handleEdit,
      handleComplete,
      isCompleted
    } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <div className="row align-items-center">
          <span
            className={`mx-2 ${isCompleted ? "text-muted" : "text-primary"}`}
            onClick={handleComplete}
          >
            <i className="fas fa-circle" />
          </span>
          <h6 className={`mx-2 my-2 ${isCompleted ? "text-muted" : null}`}>
            {title}
          </h6>
        </div>

        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
