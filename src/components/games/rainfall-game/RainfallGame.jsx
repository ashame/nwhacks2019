import React, { Component } from 'react';
import { default as Title } from './RainfallTitle';
import { default as Finish } from './RainfallFinish';
import InputManager from './InputManager';
import GameObject from './obj/GameObject';

import './RainfallGame.css';
import kyp0 from './assets/kyp-0.png';

const WIDTH = 800;
const HEIGHT = 600;
const CELL_SIZE = 25;
var level = 1;

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
            rain: [],
        }
        this.player = new GameObject({
            pos: {
                x: 375,
                y: 550,
            },
            poly: {
                width: 63,
                height: 50,
            },
            velocity: 6,
        });
    }

    componentDidMount() {
        const ctx = this.refs.raincanvas.getContext('2d');
        const _kyp = this.refs.kyp;

        this.setState({ 
            ctx: ctx,
            kyp: _kyp,
        });
        this.state.input.bindKeys();

        requestAnimationFrame(() => { this.repaint() })
    }

    componentWillUnmount() {
        this.state.input.unbindKeys();
    }

    generateRain(count, velocity) {        
        let _rain = this.state.rain;
        for (let i = 0; i < count; i++) {
            let rainDrop = new GameObject({
                pos: {
                    x: Math.floor(Math.random() * WIDTH),
                    y: Math.floor((Math.random() * HEIGHT) - HEIGHT / 2),
                },
                velocity: velocity,
                poly: {
                    width: 5,
                    height: 5,
                }
            })
            _rain.push(rainDrop);
        }
        this.setState({
            rain: _rain,
        })
    }

    startGame() {
        this.generateRain(10, 1.6);
        this.setState({
            gameState: GameState.Playing,
        })
    }

    checkCollision(o) {
        let player = this.player;

        let ox = o.pos.x;
        let oy = o.pos.y;
        let ow = o.poly.width;
        let oh = o.poly.height;

        let px = player.pos.x;
        let py = player.pos.y;
        let pw = player.poly.width;
        let ph = player.poly.height;

        if (ox >= px && ox + ow <= px + pw
            && oy >= py && oy + oh <= py + ph) {
                this.setState({
                    gameState: GameState.Finish,
                })
                const ctx = this.state.ctx;
                ctx.clearRect(0, 0, WIDTH, HEIGHT);
                return true;
            } else {
                return false;
            }
    }

    handlePlayerMovement(keys) {
        let player = this.player;
        if (keys.left) {
            player.pos.x = player.pos.x - player.velocity < 0 ? 0 : player.pos.x - player.velocity;
        } else if (keys.right) {
            player.pos.x = player.pos.x + player.velocity > 750 ? 750 : player.pos.x + player.velocity;
        }
    }

    repaint() {
        const keys = this.state.input.pressedKeys;
        const gameState = this.state.gameState;
        const ctx = this.state.ctx;
        const kyp = this.state.kyp;
        let rain = this.state.rain;

        if (level < 5) {

        }

        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        if (gameState === GameState.Playing) {

            if (rain.length > 0) {
                for (let i = 0; i < rain.length; i++) {
                    if (rain[i].pos.y > HEIGHT) {
                        rain.splice(i, 1);
                        continue;
                    }
                    if (!this.checkCollision(rain[i])) {
                        let _rain = rain[i].pos;
                        ctx.moveTo(_rain.x, _rain.y);
                        ctx.beginPath();
                        ctx.arc(_rain.x + 3, _rain.y, 5, 0, 2 * Math.PI);
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fillStyle = "cyan";
                        ctx.fill();
                        rain[i].pos.y += rain[i].velocity;
                    } else {
                        rain.splice(i, 1);
                    }
                }
            }

            let player = this.player;
            if (player != null) {
                ctx.drawImage(kyp, player.pos.x, player.pos.y, kyp.width * 1, kyp.height * 1);
            }
            this.handlePlayerMovement(keys);
        }

        if (gameState === GameState.Start && keys.enter) {
            this.startGame();
        }

        requestAnimationFrame(() => { this.repaint() });
    }

    render() {
        return (
            <div>
                <img src={kyp0} ref="kyp" className="hidden" alt="kyp" height={50} />
                <div className="board"
                    style={{
                        width: WIDTH,
                        height: HEIGHT,
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                    }}>
                    {this.state.gameState === GameState.Start && <Title />}
                    {this.state.gameState === GameState.Finish && <Finish />}
                    <canvas className="rain-canvas" ref="raincanvas"
                        width={WIDTH} height={HEIGHT} />
                </div>
            </div>
        );
    }
}

export default RainfallGame;