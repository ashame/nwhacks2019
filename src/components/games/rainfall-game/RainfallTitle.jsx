import React, { Component } from 'react';
import './RainfallTitle.css';

class RainfallTitle extends Component {
    render() {
        if (!this.props.start) {
            return (
                <div>
                    <span className="centerScreen title">Welcome to Raincouver!</span>
                    <span className="centerScreen startMsg">Press Enter to Start</span>
                </div>
            );
        } else {
            return (
                <br />
            )
        }
    }
}

export default RainfallTitle;