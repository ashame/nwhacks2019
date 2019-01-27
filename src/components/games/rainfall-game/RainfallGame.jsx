import React, { Component } from 'react';
import { default as Title } from './RainfallTitle';
import InputManager from './InputManager';
import GameObject from './obj/GameObject';
import './RainfallGame.css';

const WIDTH = 800;
const HEIGHT = 600;
const CELL_SIZE = 25;

const GameState = {
    Start: 0,
    Playing: 1,
    Finish: 2,
}

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
            rain: [new GameObject({
                pos: {
                    x: 15,
                    y: 15,
                }, 
                velocity: 0.7,
            })],
        }
        this.player = new GameObject({
            pos: {
                x: 50,
                y: 140,
            }, 
            velocity: 5,
        });
    }

    componentDidMount() {
        const ctx = this.refs.raincanvas.getContext('2d');
        this.setState({ ctx: ctx });
        this.state.input.bindKeys();

        requestAnimationFrame(() => { this.repaint() })
    }

    componentWillUnmount() {
        this.state.input.unbindKeys();
    }

    startGame() {
        this.setState({
            gameState: GameState.Playing,
        })
    }

    checkCollision(o) {
        return false;
    }

    handlePlayerMovement(keys) {
        let player = this.player;
        if (keys.left) {
            player.pos.x = player.pos.x - player.velocity < 0 ? 0 : player.pos.x - player.velocity;
        } else if (keys.right) {
            player.pos.x = player.pos.x + player.velocity > 290 ? 290 : player.pos.x + player.velocity;
        }
    }

    repaint() {
        const keys = this.state.input.pressedKeys;
        const gameState = this.state.gameState;
        const ctx = this.state.ctx;
        let rain = this.state.rain;

        if (gameState === GameState.Start && keys.enter) {
            this.startGame();
            console.log(rain);
        }

        ctx.clearRect(0, 0, 300, 300);

        if (gameState === GameState.Playing && rain.length > 0 && rain[0] !== undefined && rain[0] !== null) {
            for (let i = 0; i < rain.length; i++) {
                if (rain[i].pos.y < 0) {
                    rain.splice(i, 1);
                    continue;
                }
                if (!this.checkCollision(rain[i])) {
                    let _rain = rain[i].pos;
                    ctx.moveTo(_rain.x, _rain.y);
                    ctx.beginPath();
                    ctx.arc(_rain.x + 1, _rain.y, 2, 0, 2 * Math.PI);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fillStyle = "cyan";
                    ctx.fill();
                    rain[i].pos.y += rain[i].velocity;
                } else {
                    rain.splice(i, 1);
                }
            }
            let player = this.player;
            if (player != null) {
                ctx.moveTo(player.pos.x, player.pos.y);
                ctx.beginPath();
                ctx.lineTo(player.pos.x + 10, player.pos.y);
                ctx.lineTo(player.pos.x + 10, player.pos.y + 10);
                ctx.lineTo(player.pos.x, player.pos.y + 10);
                ctx.lineTo(player.pos.x, player.pos.y);
                ctx.closePath();
                ctx.fill();
            }
            this.handlePlayerMovement(keys);
        }

        requestAnimationFrame(() => { this.repaint() });
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
                    {this.state.gameState === GameState.Start && <Title />}
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