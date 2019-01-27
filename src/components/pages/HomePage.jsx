import React, { Component } from 'react';

class HomePage extends Component {
    render() { 
        return(
            <div>
                <div class="logo">
                    <img src={require('../../assets/logo.png')} alt="logo" height="250" />
                </div>
                <button className="play" onClick={this.props.handleClick}>Play!</button>
            </div>
        )
    }
}

export default HomePage;