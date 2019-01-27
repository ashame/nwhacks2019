import React, { Component } from 'react';
import './RainfallTitle.css';

class RainfallTitle extends Component {
    render() {
        return (
            <div>
                <span className="centerScreen title">Welcome to Raincouver!</span>
                <span className="centerScreen startMsg">Press Enter to Start</span>
            </div>
        );
    }
}

export default RainfallTitle;