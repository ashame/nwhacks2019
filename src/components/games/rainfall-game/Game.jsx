import React, { Component } from 'react';
import Title from './Title';
import './Game.css';

const WIDTH = 800;
const HEIGHT = 600;
const CELL_SIZE = 25;

class Game extends Component {
    render() {
        return (
            <div> 
                <div className="board" 
                    style={{
                        width: WIDTH, 
                        height: HEIGHT,
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                    }}>
                    <Title />
                    <canvas ref="rain-canvas"
                        style={{
                            width: WIDTH,
                            height: HEIGHT,
                        }}>
                    </canvas>
                </div>
            </div>
        );
    }
}

export default Game;