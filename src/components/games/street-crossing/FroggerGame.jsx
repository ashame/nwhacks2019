import React, { Component } from 'react';

import InputManager from '../InputManager';
import { default as Title, default as Finish } from '../GameText';
import GameObject from '../GameObject';

import './FroggerGame.css';

const WIDTH = 800;
const HEIGHT = 600;
const CELL_SIZE = 25;

const GameState = {
    Start: 0,
    Playing: 1,
    Finish: 2,
}

var level = 1;
const colors = ["cyan", "green", "red"];

class FroggerGame extends Component {
    constructor() {
        super();
        this.state = {
            input: new InputManager(),
            screen: {
                width: WIDTH,
                height: HEIGHT,
            },
            gameState: GameState.Start,
            cars: [],
            bg: null,
            kyp: null,
        }
        this.player = new GameObject({
            pos: {
                x: 375,
                y: 550,
            },
            poly: {
                width: 56,
                height: 48,
            },
            velocity: 3,
        });
    }

    componentDidMount() {
        const ctx = this.refs.carcanvas.getContext('2d');

        const kyp = new Image();
        kyp.src = "https://imgur.com/e1qwjVW.png";
        kyp.onload = () => {
            this.setState({
                kyp: kyp,
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

    generateCars(count, velocity) {
        let _cars = this.state.cars;
        for (let i = 0; i < count; i++) {
            let car = new GameObject({
                pos: {
                    x: Math.floor(Math.random() * WIDTH),
                    y: Math.floor((Math.random() * (HEIGHT / 50))) * 50,
                },
                velocity: Math.random() > 0.5 ? velocity : -velocity,
                poly: {
                    width: 50,
                    height: 50,
                }
            })
            _cars.push(car);
        }
        this.setState({
            cars: _cars,
        })
    }

    startGame() {
        this.generateCars(8, 3.5);
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
        }
        if (keys.right) {
            player.pos.x = player.pos.x + player.velocity > 750 ? 750 : player.pos.x + player.velocity;
        }
        if (keys.up) {
            player.pos.y = player.pos.y - player.velocity < 0 ? 0 : player.pos.y - player.velocity;
        }
        if (keys.down) {
            player.pos.y = player.pos.y + player.velocity > 550 ? 550 : player.pos.y + player.velocity;
        }
    }

    repaint() {
        const keys = this.state.input.pressedKeys;
        const gameState = this.state.gameState;
        const ctx = this.state.ctx;
        const kyp = this.state.kyp;
        const bg = this.state.bg;

        let cars = this.state.cars;

        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        if (bg != null)
            ctx.drawImage(bg, -1, -1);

        if (gameState === GameState.Playing) {
            if (cars.length > 0) {
                for (let i = 0; i < cars.length; i++) {
                    let x = cars[i].pos.x;
                    if (x < 0 || x > WIDTH) {
                        cars[i].pos.x = x < 0 ? WIDTH : 0;
                        continue;
                    }
                    if (!this.checkCollision(cars[i])) {
                        let car = cars[i];
                        ctx.moveTo(car.x, car.y);
                        ctx.fillStyle = colors[level - 1];
                        ctx.fillRect(car.pos.x, car.pos.y, car.poly.width, car.poly.height);
                        car.pos.x += car.velocity;
                    } 
                }
            }

            let player = this.player;
            if (player != null) {
                if (player.pos.y === 0) {
                    if (level < 3) {
                        player.pos.y = 550;
                        level++;
                        cars.splice(0, cars.length);
                        this.generateCars(8 + (1.7 * level), 2 + (1.2 * level));
                    } else {
                        this.setState({
                            gameState: GameState.Finish,
                        })
                    }
                }
                if (kyp != null)
                    ctx.drawImage(kyp, player.pos.x, player.pos.y, kyp.width * 0.075, kyp.height * 0.075);
                else
                    ctx.fillRect(player.pos.x, player.pos.y, player.poly.width, player.poly.height);
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
                    {this.state.gameState === GameState.Start && <Title title="Cross the Street!" msg="Press Enter to Start!" />}
                    {this.state.gameState === GameState.Finish && <Finish title="Game Over!" msg="Phew, made it across safely" />}
                    <canvas className="car-canvas" ref="carcanvas"
                        width={WIDTH} height={HEIGHT} />
                </div>
            </div>
        );
    }
}

export default FroggerGame;