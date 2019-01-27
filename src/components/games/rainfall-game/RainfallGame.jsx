import React, { Component } from 'react';

import InputManager from '../InputManager';
import { default as Title, default as Finish } from '../GameText';
import GameObject from '../GameObject';

import './RainfallGame.css';

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
            bg: null,
            kyp: null,
        }
        this.player = new GameObject({
            pos: {
                x: 375,
                y: 550,
            },
            poly: {
                width: 50,
                height: 50,
            },
            velocity: 6,
        });
    }

    componentDidMount() {
        const ctx = this.refs.raincanvas.getContext('2d');

        const kyp = new Image();
        kyp.src = "https://imgur.com/e1qwjVW.png";
        kyp.onload = () => {
            this.setState({
                kyp: kyp,
            })
        }

        const bg = new Image();
        bg.src = "https://imgur.com/KuTAA3A.png";
        bg.onload = () => {
            this.setState({
                bg: bg,
            })
        }

        this.setState({
            ctx: ctx,
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
                    y: Math.floor((Math.random() * HEIGHT) - HEIGHT),
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
        this.generateRain(15, 3);
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

    checkRainPassTop() {
        let rainDropArray = this.state.rain;

        for (var i = 0; i < rainDropArray.length; i++) {
            if (rainDropArray[i].pos.y < 0) {
                return false;
            }
        }
        return true;
    }

    repaint() {
        const keys = this.state.input.pressedKeys;
        const gameState = this.state.gameState;
        const ctx = this.state.ctx;
        const kyp = this.state.kyp;
        const bg = this.state.bg;
        let rain = this.state.rain;

        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        if (bg != null)
            ctx.drawImage(bg, -1, -1, bg.width * 0.16, bg.height * 0.1856);

        if (gameState === GameState.Playing) {

            if (level < 5) {
                // rain.length <= Math.ceil(level / 2)
                if (this.checkRainPassTop()) {
                    level++;
                    this.generateRain(level === 5 ? level * 20 : level * 8, 3);
                }
            } else {
                if (rain.length === 0)
                    this.setState({
                        gameState: GameState.Finish,
                    });
            }

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
            if (player != null && kyp != null) {
                ctx.drawImage(kyp, player.pos.x, player.pos.y, kyp.width * 0.075, kyp.height * 0.075);
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
                <div className="board"
                    style={{
                        width: WIDTH,
                        height: HEIGHT,
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                    }}>
                    {this.state.gameState === GameState.Start && <Title title="Welcome to Raincouver!" msg="Press Enter to Start!" />}
                    {this.state.gameState === GameState.Finish && <Finish title="Game Over!" msg="Turns out the rain was harmless..." />}
                    <canvas className="rain-canvas" ref="raincanvas"
                        width={WIDTH} height={HEIGHT} />
                </div>
            </div>
        );
    }
}

export default RainfallGame;