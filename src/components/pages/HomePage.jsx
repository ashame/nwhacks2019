import React, { Component } from 'react';

class HomePage extends Component {
    componentDidMount() {
        const audio = this.refs.audio;
        audio.addEventListener('canplay', () => {
            audio.play();
        })
        audio.addEventListener('ended', () => {
            audio.play();
        })
      }

    render() { 
        return(
            <div>
                <div className="logo">
                    <img src={require('../../assets/logo.png')} alt="logo" height="250" />
                </div>
                <audio ref="audio" src={require('../../assets/piano2-CoolEdit.mp3')} autoplay />
                <button className="play" onClick={this.props.handleClick}>Play!</button>
            </div>
        )
    }
}

export default HomePage;