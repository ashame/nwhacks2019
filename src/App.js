import React, { Component } from 'react';
import './App.css';

import { default as ProgressBar } from './components/pages/ProgressBar';
import StarField from './components/pages/StarField';
import HomePage from './components/pages/HomePage';
import HideAndSeek from './components/pages/HideAndSeek'
import ClickTheButton2 from './components/pages/ClickTheButton2'
import WalkingScene from './components/pages/WalkingScene'

import { default as RainfallGame } from "./components/games/rainfall-game/RainfallGame";
import { default as FroggerGame } from "./components/games/street-crossing/FroggerGame";

import PantingScene from './components/pages/PantingScene'
import SatelliteBeamDown from './components/pages/SatelliteBeamDown'
import LightPostScene from './components/pages/LightPostScene'
import FollowTheStars from './components/pages/FollowTheStars'
import CityOutskirts from './components/pages/CityOutskirts'
import EndingScene from './components/pages/EndingScene'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const audio = this.refs.audio;
    audio.addEventListener('canplay', () => {
        audio.play();
    })
    audio.addEventListener('ended', () => {
        audio.play();
    })
  }

  handleClick() {
    var page = this.state.page;
    var newPage = page + 1;
    this.setState({
      page: newPage
    });
  }

  render() {
    
    var page = this.state.page
    return (
      <div className="App">
        <audio ref="audio" src={require('./assets/Retro_Shine.mp3')} autoPlay />
        <div className="App-header">
          {
            page === 1 ? (
            <HomePage handleClick={this.handleClick} />
          ) : page === 2 ? (
            <StarField />
          ) : page === 3 ? (
            <HideAndSeek />
          ) : page === 4 ? (
            <ClickTheButton2 handleClick={this.handleClick}/>
          ) : page === 5 ? (
            <SatelliteBeamDown />
          ) : page === 6 ? (
            <div>
              <p>Kyp is beamed down without his parents noticing. </p>
            </div>
          ) : page === 7 ? (
            <LightPostScene />
          ) : page === 8 ? (
            <FollowTheStars />
          ) : page === 9 ? (
            <WalkingScene />
          ) : page === 10 ? (
            <div>
              <p>As Kyp continues through the city streets, he comes across a busy highway</p>
            </div>
          ) : page === 11 ? (
            <FroggerGame handleClick={this.handleClick}/>
          ) : page === 12 ? (
            <PantingScene/>
          ) : page === 13 ? (
            <CityOutskirts/>
          ) : page === 14 ? (
            <RainfallGame handleClick={this.handleClick} />
          ) : page === 15 ? (
            <div>
              <p>The rain is ineffective! Who knew?</p>
            </div>
          ) : page === 16 ? (
            <div>
              <p>"It's c-co-cooold!" *b-br-brrr*</p>
              <p>Kyp finds shelter under a leaf for the night</p>
              <p>At sunrise, Kyp is reunited with his family!</p>
            </div>
          ) : page === 17 ? (
            <EndingScene/>
          ) : null}
        </div>
        <div className="App-footer">
          <ProgressBar page={page} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
