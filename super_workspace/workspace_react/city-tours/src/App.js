import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

class App extends Component {
  state = {
    favorPage: false
  };

  _tours = event => {
    event.preventDefault();
    this.setState({
      favorPage: false
    });
  };

  _favorTours = event => {
    event.preventDefault();
    this.setState({
      favorPage: true
    });
  };

  render() {
    const { favorPage } = this.state;
    return (
      <main>
        <Navbar
          favorPage={favorPage}
          tours={this._tours}
          favorTours={this._favorTours}
        />
        <TourList favorPage={favorPage} />
      </main>
    );
  }
}

export default App;
