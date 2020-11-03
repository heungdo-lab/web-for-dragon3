import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const API_KEY = "7b920d91eb825ed81ed599f0fdbfbd4f";

class App extends Component {
  // LocalStorage에 recipes 저장하는 함수
  _setLocalStorage = recipes => {
    const setRecipes = JSON.stringify(recipes);
    localStorage.setItem("recipes", setRecipes);
  };

  _getRecipe = async event => {
    event.preventDefault();
    const recipeName = event.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );

    const data = await api_call.json();

    // 뒤로가기 버튼을 눌렀을 때, 레시피 목록을 보여 줘야 돼 -> LocalStorage에 recipes 저장하는 함수 호출
    this._setLocalStorage(data.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this._getRecipe} />
      </div>
    );
  }
}

export default App;
