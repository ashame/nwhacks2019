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
              <WalkingScene />
            ) : page === 6 ? (
              <RainfallGame />
            ) : page === 7 ? (
              <FroggerGame />
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
