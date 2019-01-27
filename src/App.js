import React, { Component } from 'react';
import { default as RainfallGame } from "./components/games/rainfall-game/RainfallGame";
import { default as FroggerGame } from "./components/games/street-crossing/FroggerGame";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {false ? <RainfallGame /> : <FroggerGame />}
        </header>
      </div>
    );
  }
}

export default App;
