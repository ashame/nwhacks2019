import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBarExample from './ProgressBar';
import StarField from './StarField';
import HomePage from './homepage';
import HideAndSeek from './HideAndSeek'
import ClickTheButton from './ClickTheButton'
import ClickTheButton2 from './ClickTheButton2'
import WalkingScene from './WalkingScene'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:1
    };
    this.handleClick = this.handleClick.bind(this);
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
          {page === 1 ? (
            <HomePage handleClick = {this.handleClick}/>
          ) : page === 2 ? (
            <StarField/>
          ) : page === 3 ? (
            <HideAndSeek/>
          ) : page === 4 ? (
            <ClickTheButton2/>
          ) : page === 5 ? (
            <WalkingScene/>
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
          <div className="App-footer">
            <p className="App-share">Share</p>
            {/* <p>Progress bar</p> */}
            <ProgressBarExample handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
