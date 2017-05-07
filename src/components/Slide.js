import React, { Component } from 'react';
import { slides } from '../Data'

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    }
  }

  onChangeSlide(nextStep) {
    this.setState({ currentStep: nextStep });
  }

  render() {
    const { currentStep } = this.state;

    return (
      <div className="slide">
        <h2 className="title">{slides[currentStep].title}</h2>
        <div className="slide-image-wrapper">
          <img src={slides[currentStep].image} className="slide-image" alt="slide image" />
        </div>
        <h4 className="subtitle">{slides[currentStep].subtitle}</h4>
        <p className="text">{slides[currentStep].text}</p>
        <nav className="slides-navigation">
          <div className="nav-arrow left" onClick={() => this.onChangeSlide(currentStep - 1)}>
            {"<"}
          </div>
          <div className="nav-arrow right" onClick={() => this.onChangeSlide(currentStep + 1)}>
            {">"}
          </div>
        </nav>
      </div>
    );
  }
}

export default Slide;
