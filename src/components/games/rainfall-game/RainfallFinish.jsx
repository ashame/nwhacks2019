import React, { Component } from 'react';
import './RainfallTitle.css'

class RainfallFinish extends Component {
    render() {
        return (
            <div>
                <span className="centerScreen title">Game Over!</span>
                <span className="centerScreen startMsg">Turns out the rain was harmless</span>
            </div>
        );
    }
}

export default RainfallFinish;