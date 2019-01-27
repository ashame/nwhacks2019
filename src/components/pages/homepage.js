import React, { Component } from 'react';

class HomePage extends Component {
    render() { 
        return(
            <div>
                <p>
                Blank is a story about finding home
                </p>
                <button onClick={this.props.handleClick}>Play</button>
            </div>
        )
    }
}

export default HomePage;