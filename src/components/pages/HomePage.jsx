import React, { Component } from 'react';

class HomePage extends Component {
    render() { 
        return(
            <div>
                <div className="logo">
                    <img src={require('../../assets/logo.png')} alt="logo" height="250" />
                </div>
                {/* <audio ref="audio" src={require('../../assets/piano2-CoolEdit.mp3')} autoplay /> */}
                <button className="play" onClick={this.props.handleClick}>Play!</button>
            </div>
        )
    }
}

export default HomePage;