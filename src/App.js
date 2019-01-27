import React, { Component } from 'react';
import Game from "./components/games/rainfall-game/Game";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Game />
        </header>
      </div>
    );
  }
}

export default App;
