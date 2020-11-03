import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const {
      toDos,
      completedTodo,
      uncompletedTodo,
      editTodo,
      deleteTodo
    } = this.props;
    return Object.values(toDos).map(toDo => (
      <TodoItem
        key={toDo.id}
        id={toDo.id}
        title={toDo.title}
        isClicked={toDo.isClicked}
        completedTodo={completedTodo}
        uncompletedTodo={uncompletedTodo}
        editTodo={editTodo}
        deleteTodo={() => deleteTodo(toDo.id)}
      />
    ));
  }
}
