import React, { Component } from 'react';
import {default as Title} from './RainfallTitle';
import InputManager from './InputManager';
import './RainfallGame.css';

const WIDTH = 800;
const HEIGHT = 600;
const CELL_SIZE = 25;

const GameState = {
    Start: 0,
    Playing: 1, 
    Finish: 2,
}

var ctx = null;

class RainfallGame extends Component {
    constructor() {
        super();
        this.state = {
            input: new InputManager(),
            screen: {
                width: WIDTH,
                height: HEIGHT,
            },
            gameState: GameState.Start,
        }
    }

    componentDidMount() {
        ctx = this.refs.raincanvas.getContext('2d');
        this.state.input.bindKeys();
        console.log(`canvas ctx: ${ctx}`)

        requestAnimationFrame(() => {this.repaint()})
    }

    componentWillUnmount() {
        this.state.input.unbindKeys();
    }

    startGame() {
        this.setState({
            gameState: GameState.Playing,
        })
    }

    repaint() {
        const keys = this.state.input.pressedKeys;
        const _state = this.state.gameState;

        if (_state === GameState.Start && keys.enter) {
            this.startGame();
        } 
        
        requestAnimationFrame(() => {this.repaint()});
    }

    render() {
        return (
            <div> 
                <div className="board" 
                    style={{
                        width: WIDTH, 
                        height: HEIGHT,
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                    }}>
                    { this.state.gameState === GameState.Start && <Title /> }
                    <canvas className="rain-canvas" ref="raincanvas"
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

export default RainfallGame;