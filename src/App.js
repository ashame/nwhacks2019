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
import RainGameStart from './components/pages/RainGameStart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.handleClick = this.handleClick.bind(this);
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
        <div className="App-header">
          {
            page === 1 ? (
            <HomePage handleClick={this.handleClick} />
          ) : page === 2 ? (
            <StarField />
          ) : page === 3 ? (
            <HideAndSeek />
          ) : page === 4 ? (
            <ClickTheButton2 />
          ) : page === 5 ? (
            <SatelliteBeamDown />
          ) : page === 6 ? (
            <LightPostScene />
          ) : page === 7 ? (
            <FollowTheStars />
          ) : page === 8 ? (
            <WalkingScene />
          ) : page === 9 ? (
            <div>
              <p>Gotta cross that highway doe</p>
            </div>
          ) : page === 10 ? (
            <FroggerGame />
          ) : page === 11 ? (
            <PantingScene/>
          ) : page === 12 ? (
            <CityOutskirts/>
          ) : page === 13 ? (
            <RainGameStart/>
          ) : page === 14 ? (
            <RainfallGame />
          ) : page === 15 ? (
            <div>
              <p>The rain is ineffective! Who knew?</p>
            </div>
          ) : page === 16 ? (
            <div>
              <p>It's cooold! *b-br-brrr*</p>
              <p>(Hide under a leaf for cover)</p>
            </div>
          ) : page === 17 ? (
            <div>
              <p>Sunrise parents find you</p>
            </div>
          ) : page === 18 ? (
            <div>
              <p>The End!</p>
            </div>
          ) : null}
        </div>
        <div className="App-footer">
          <ProgressBar handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
