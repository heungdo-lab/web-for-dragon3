import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
    favorTours: []
  };

  _favorTourData = id => {
    const { tours, favorTours } = this.state;
    if (!favorTours.some(favorTour => favorTour.id === id)) {
      const favorTour = tours.filter(tour => tour.id === id);
      this.setState(prevState => {
        const newFavorTours = [...prevState.favorTours, favorTour[0]];
        const newState = {
          ...prevState,
          favorTours: newFavorTours
        };
        return { ...newState };
      });
    }
  };

  _deleteTourData = id => {
    const { tours } = this.state;
    const newTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: newTours
    });
  };

  _deleteFavorTourData = id => {
    const { favorTours } = this.state;
    const newFavorTours = favorTours.filter(favorTour => favorTour.id !== id);
    this.setState({
      favorTours: newFavorTours
    });
  };

  render() {
    const { tours, favorTours } = this.state;
    const { favorPage } = this.props;
    return (
      <section className="tourlist">
        {favorPage
          ? favorTours.map(favorTour => (
              <Tour
                key={favorTour.id}
                tour={favorTour}
                favorPage={favorPage}
                favorTourData={() => null}
                deleteTourData={this._deleteFavorTourData}
              />
            ))
          : tours.map(tour => (
              <Tour
                key={tour.id}
                tour={tour}
                favorPage={favorPage}
                favorTourData={this._favorTourData}
                deleteTourData={this._deleteTourData}
              />
            ))}
      </section>
    );
  }
}
