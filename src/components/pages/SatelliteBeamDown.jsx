import React, { Component } from 'react';

class SatelliteBeamDown extends Component {

    componentDidMount() {
      const audio = this.refs.beamMeDownScotty;
      audio.addEventListener('canplay', () => {
          audio.play();
      })
      audio.addEventListener('ended', () => {
          audio.play();
      })
    }

    render() {
      return (
        <div className="presentation-content">
            <audio ref="beamMeDownScotty" src={require('../../assets/shooting-star.mp3')} autoplay />
            <img id="lampost" src={require('../../assets/kyp_dropoff.png')} alt="logo" width="1600"/>
        </div>
      )
    }
  }

  export default SatelliteBeamDown;
