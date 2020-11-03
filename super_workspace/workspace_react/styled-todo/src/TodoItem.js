import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TodoItem extends Component {
  render() {
    const { id, title, isClicked, editTodo, deleteTodo } = this.props;
    return (
      <ItemBox>
        <ToggleCircle
          onClick={this._toggleClicked}
          isClicked={isClicked ? isClicked : null}
        />
        <Title isClicked={isClicked ? isClicked : null}>{title}</Title>
        <RighIconBoxs>
          <RightIconBox onClick={() => editTodo(id)}>
            <FontAwesomeIcon icon="pen" color="green" />
          </RightIconBox>
          <RightIconBox onClick={deleteTodo}>
            <FontAwesomeIcon icon="trash-alt" color="red" />
          </RightIconBox>
        </RighIconBoxs>
      </ItemBox>
    );
  }

  _toggleClicked = () => {
    const { id, title, isClicked, completedTodo, uncompletedTodo } = this.props;
    if (isClicked) {
      uncompletedTodo(id, title);
    } else {
      completedTodo(id, title);
    }
  };
}

const ItemBox = styled.div`
  width: 700px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-color: #cccccc;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
`;

const ToggleCircle = styled.div`
  margin-right: 10px;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  border: 3px solid ${props => (props.isClicked ? "#6d757d" : "#1A11FF")};
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-size: 20px;
  color: ${props => (props.isClicked ? "#6d757d" : "#1A11FF")};
  text-transform: capitalize;
`;

const RighIconBoxs = styled.div`
  display: flex;
`;

const RightIconBox = styled.div`
  margin: 0 10px;
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;
