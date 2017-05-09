import React, { Component } from 'react';
import { slides } from '../Data'

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      isActive: true
    }
  }

  componentWillMount(){
      document.addEventListener("keyup", (event) => this.onKeyPress(event));
  }

  onKeyPress(event) {
    const { currentStep } = this.state;

    if (event.code === 'ArrowRight') {
      this.onChangeSlide(currentStep + 1);
    } else if (event.code === 'ArrowLeft') {
      this.onChangeSlide(currentStep - 1);
    }
  }

  scrollToTop(scrollDuration = 300) {
    const scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(() => {
      if ( window.scrollY !== 0 ) {
        window.scrollBy( 0, scrollStep );
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  onChangeSlide(nextStep) {
    this.scrollToTop();
    this.setState({ isActive: false });
    setTimeout(() => {
      this.setState({ currentStep: nextStep, isActive: true });
    }, 400);
  }

  render() {
    const { currentStep, isActive } = this.state;

    return (
      <div className={`slide active-${isActive}`}>
        <h2 className="title">{slides[currentStep].title}</h2>
        <div className="slide-image-wrapper">
          <img src={slides[currentStep].image} className="slide-image" alt="slide" />
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
