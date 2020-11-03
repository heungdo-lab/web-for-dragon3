import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCheckCircle,
  faPen,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import uuidv1 from "uuid/v1";
import TodoList from "./TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;    
  }
`;

library.add(faFileAlt, faCheckCircle, faPen, faTrashAlt);

export default class App extends Component {
  state = {
    isEditing: false,
    toDos: {},
    toDo: "",
    id: uuidv1(),
    isLoaded: false
  };

  componentDidMount = () => {
    this._loadedTodos();
  };

  _changeInput = event => {
    this.setState({
      toDo: event.target.value
    });
  };

  _addTodo = event => {
    event.preventDefault();
    const { toDos, toDo, id } = this.state;
    if (toDo !== "") {
      const newTodo = {
        id: id,
        title: toDo,
        isClicked: false
      };

      const newToDos = {
        ...toDos,
        [id]: newTodo
      };

      this.setState({
        toDos: newToDos,
        toDo: "",
        id: uuidv1(),
        isEditing: false
      });
    }

    this._saveTodos();
  };

  _saveTodos = () => {
    const { toDos } = this.state;
    localStorage.setItem("toDos", JSON.stringify(toDos));
  };

  _loadedTodos = async () => {
    const loadedToDos = await localStorage.getItem("toDos");
    const parsedToDos = JSON.parse(loadedToDos);
    this.setState({
      toDos: parsedToDos || {},
      isLoaded: true
    });
  };

  _completedTodo = (id, toDo) => {
    this.setState(prevState => {
      delete prevState.toDos[id];
      const newTodo = {
        id: id,
        title: toDo,
        isClicked: true
      };

      const newToDos = {
        ...prevState.toDos,
        [id]: newTodo
      };

      const newState = {
        ...prevState,
        toDos: newToDos
      };

      return { ...newState };
    });

    this._saveTodos();
  };

  _uncompletedTodo = (id, toDo) => {
    this.setState(prevState => {
      delete prevState.toDos[id];
      const newTodo = {
        id: id,
        title: toDo,
        isClicked: false
      };

      const newToDos = {
        ...prevState.toDos,
        [id]: newTodo
      };

      const newState = {
        ...prevState,
        toDos: newToDos
      };

      return { ...newState };
    });

    this._saveTodos();
  };

  _clearCompletedItem = () => {
    const { toDos } = this.state;
    const completedTodos = Object.values(toDos).filter(
      toDo => toDo.isClicked === true
    );
    completedTodos.map(completedTodo =>
      this.setState(prevState => {
        delete prevState.toDos[completedTodo.id];
        const newState = {
          ...prevState
        };

        return { ...newState };
      })
    );

    this._saveTodos();
  };

  _clearList = () => {
    this.setState({
      toDos: {}
    });
  };

  _editTodo = id => {
    this.setState(prevState => {
      const editTodo = prevState.toDos[id].title;
      delete prevState.toDos[id];
      const newState = {
        ...prevState,
        toDo: editTodo,
        id: id,
        isEditing: true
      };

      return { ...newState };
    });

    this._saveTodos();
  };

  _deleteTodo = id => {
    this.setState(prevState => {
      delete prevState.toDos[id];
      const newState = {
        ...prevState
      };

      return { ...newState };
    });
  };

  render() {
    const { isEditing, toDo, toDos, isLoaded } = this.state;
    if (!isLoaded) {
      console.log("is Loading...");
    }
    return (
      <Container>
        <GlobalStyle />
        <ContainerUpper>
          <Span>Todo Input</Span>
          <InputBox onSubmit={this._addTodo}>
            <InputBoxUpper>
              <IconBox isEditing={isEditing ? isEditing : null}>
                <FontAwesomeIcon icon="file-alt" color="white" />
              </IconBox>
              <Input
                type="text"
                placeholder="Add a Todo Item"
                value={toDo}
                onChange={this._changeInput}
              />
            </InputBoxUpper>
            <AddButton
              type="submit"
              isEditing={isEditing ? isEditing : null}
              onClick={this._addTodo}
            >
              <ButtonText>{isEditing ? "Edit Item" : "Add Item"}</ButtonText>
            </AddButton>
          </InputBox>
        </ContainerUpper>
        <ContainerLower>
          <Span>Todo List</Span>
          <TodoList
            toDos={toDos}
            completedTodo={this._completedTodo}
            uncompletedTodo={this._uncompletedTodo}
            editTodo={this._editTodo}
            deleteTodo={this._deleteTodo}
          />
          <LowerButton>
            {Object.values(toDos).some(toDo => toDo.isClicked) ? (
              <ClearButton clearCompleted onClick={this._clearCompletedItem}>
                <ButtonText>Clear Completed Item</ButtonText>
              </ClearButton>
            ) : null}
            <ClearButton clearList onClick={this._clearList}>
              <ButtonText>Clear List</ButtonText>
            </ClearButton>
          </LowerButton>
        </ContainerLower>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerUpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 50px 0;
`;

const ContainerLower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const InputBox = styled.form`
  width: 700px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-color: #cccccc;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
`;

const InputBoxUpper = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  height: 20px;
  padding: 10px 15px;
  background-color: ${props => (props.isEditing ? "blue" : "green")};
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 7px;
  font-size: 20px;
  font-weight: 300;
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
`;

const AddButton = styled.button`
  height: 40px;
  background-color: ${props => (props.isEditing ? "blue" : "green")};
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;

const ButtonText = styled.span`
  font-size: 20px;
  font-weight: 200;
  color: white;
`;

const LowerButton = styled.div`
  display: flex;
`;

const ClearButton = styled.button`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: ${props => (props.clearCompleted ? "orange" : "red")};
  margin: 25px 10px;
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
    box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.3);
  }
`;
