import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const {
      items,
      clearList,
      handleDelete,
      handleEdit,
      handleComplete
    } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-center text-capitalize">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              handleComplete={() => handleComplete(item.id)}
              isCompleted={item.isCompleted}
            />
          );
        })}
        <div className="input-group-text">
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize"
            onClick={clearList}
          >
            clear list
          </button>
          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize"
            onClick={clearList}
          >
            clear completed item
          </button>
        </div>
      </ul>
    );
  }
}
