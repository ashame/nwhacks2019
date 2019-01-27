import React, { Component } from 'react';
import './GameText.css';

class GameText extends Component {
    render() {
        return (
            <div>
                <span className="centerScreen title">{this.props.title}</span>
                <span className="centerScreen controls">{this.props.controls}</span>
                <span className="centerScreen msg">{this.props.msg}</span>
            </div>
        );
    }
}

export default GameText;