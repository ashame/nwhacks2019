import React, { Component } from 'react';
import {default as RainfallGame } from "./components/games/rainfall-game/RainfallGame";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RainfallGame />
        </header>
      </div>
    );
  }
}

export default App;
