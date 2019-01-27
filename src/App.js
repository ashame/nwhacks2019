import React, { Component } from 'react';
import './App.css';
import ProgressBarExample from './components/pages/ProgressBar';
import StarField from './components/pages/StarField';
import HomePage from './components/pages/homepage';
import HideAndSeek from './components/pages/HideAndSeek'
import ClickTheButton2 from './components/pages/ClickTheButton2'
import WalkingScene from './components/pages/WalkingScene'
import PantingScene from './components/pages/PantingScene'
import SatelliteBeamDown from './components/pages/SatelliteBeamDown'
import LightPostScene from './components/pages/LightPostScene'
import FollowTheStars from './components/pages/FollowTheStars'
import CityOutskirts from './components/pages/CityOutskirts'
import RainGameStart from './components/pages/RainGameStart'
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    $(document).ready(function () {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'http://www.kozco.com/tech/piano2-CoolEdit.mp3');

      audioElement.addEventListener('ended', function () {
        this.play();
      }, true);

      // audioElement.addEventListener("canplay",function(){
      //     $("#length").text("Duration:" + audioElement.duration + " seconds");
      //     $("#source").text("Source:" + audioElement.src);
      //     $("#status").text("Status: Ready to play").css("color","green");
      // });

      // audioElement.addEventListener("timeupdate",function(){
      //     $("#currentTime").text("Current second:" + audioElement.currentTime);
      // });
      audioElement.play();
      // $('#play').click(function() {
      //     audioElement.play();
      //     $("#status").text("Status: Playing");
      // });a

      // $('#pause').click(function() {
      //     audioElement.pause();
      //     $("#status").text("Status: Paused");
      // });

      // $('#restart').click(function() {
      //     audioElement.currentTime = 0;
      // });
    });
  }

  handleClick() {
    var page = this.state.page;
    var newPage = page + 1;
    console.log(page);
    console.log(newPage);
    this.setState({
      page: newPage
    });
  }

  render() {
    var page = this.state.page
    return (
      <div className="App">
        <div className="App-header">

          {/* <StarField/> */}
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
            <div>
              <p>highway game</p>
            </div>
          ) : page === 11 ? (
            <PantingScene/>
          ) : page === 12 ? (
            <CityOutskirts/>
          ) : page === 13 ? (
            <RainGameStart/>
          ) : page === 14 ? (
            <div>
              <p>rain game</p>
            </div>
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
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </div>
        <div className="App-footer">
          <p className="App-share">Share</p>
          {/* <p>Progress bar</p> */}
          <ProgressBarExample handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
