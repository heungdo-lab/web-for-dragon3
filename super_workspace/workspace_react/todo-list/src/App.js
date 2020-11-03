import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    isLoaded: false
  };

  _handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { id, item, items } = this.state;
    const newItem = {
      id: id,
      title: item,
      isCompleted: false
    };

    if (item !== "") {
      const updatedItems = [...items, newItem];
      console.log("updatedItems: ", updatedItems);
      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      });
      console.log("submit: ", items);
    }

    this._saveItems();
  };

  _clearList = () => {
    this.setState({
      items: []
    });

    this._saveItems();
  };

  _handleDelete = id => {
    const { items } = this.state;
    const filteredItems = items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });

    this._saveItems();
  };

  _handleEdit = id => {
    const { items } = this.state;
    const selectedItem = items.find(item => item.id === id);
    this._handleDelete(id);
    this.setState({
      item: selectedItem.title,
      id: id,
      editItem: true
    });

    this._saveItems();
  };

  _handleComplete = id => {
    const { items } = this.state;
    const completedItemIndex = items.findIndex(item => item.id === id);
    const restItems = items.filter(item => item.id !== id);
    const completedItem = {
      id: id,
      title: items[completedItemIndex].title,
      isCompleted: !items[completedItemIndex].isCompleted
    };
    const completedItems = [...restItems, completedItem];
    this.setState({
      items: completedItems
    });

    this._saveItems();
  };

  _saveItems = () => {
    const { items } = this.state;
    console.log(items);
    localStorage.setItem("toDos", JSON.stringify(items));
  };

  _loadedItems = async () => {
    const { items, isLoaded } = this.state;
    const loadedItems = await localStorage.getItem("toDos");
    const parsedItems = JSON.parse(loadedItems);
    this.setState({
      items: parsedItems || [],
      isLoaded: true
    });
  };

  render() {
    const { item, items, editItem } = this.state;
    // this._loadedItems();
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={item}
              handleChange={this._handleChange}
              handleSubmit={this._handleSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              clearList={this._clearList}
              handleDelete={this._handleDelete}
              handleEdit={this._handleEdit}
              handleComplete={this._handleComplete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
