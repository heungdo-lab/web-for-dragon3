import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  _toggleInfo = () => {
    const { showInfo } = this.state;
    this.setState({
      showInfo: !showInfo
    });
  };

  render() {
    const { showInfo } = this.state;
    const { favorPage, favorTourData, deleteTourData } = this.props;
    const { id, city, img, name, info } = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          {favorPage ? null : (
            <span className="btn favor-btn" onClick={() => favorTourData(id)}>
              <i className="fas fa-star" />
            </span>
          )}
          <span className="btn close-btn" onClick={() => deleteTourData(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this._toggleInfo}>
              <i
                className={`fas ${
                  showInfo ? "fa-caret-square-up" : "fa-caret-square-down"
                }`}
              />
            </span>
          </h5>
          <p>{showInfo ? info : null}</p>
        </div>
      </article>
    );
  }
}
