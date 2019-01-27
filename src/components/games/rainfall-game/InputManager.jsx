const KEY = {
    LEFT: 37, 
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    A: 65,
    D: 68,
    W: 87,
    S: 83,
    ENTER: 13,
}

export default class InputManager {
    constructor() {
        this.pressedKeys = {
            left: 0,
            right: 0,
            up: 0,
            down: 0,
            enter: 0,
        }
    }

    handleKeys(value, e) {
        let keys = this.pressedKeys;

        switch (e.keyCode) {
            case KEY.W:
            case KEY.UP:
                keys.up = value;
                console.log(`key: ${e.keyCode}`)
                break;
            case KEY.S:
            case KEY.DOWN:
                keys.down = value;
                console.log(`key: ${e.keyCode}`)
                break;
            case KEY.A:
            case KEY.LEFT:
                keys.left = value;
                console.log(`key: ${e.keyCode}`)
                break;
            case KEY.D:
            case KEY.RIGHT:
                keys.right = value;
                console.log(`key: ${e.keyCode}`)
                break;
            case KEY.ENTER:
                keys.enter = value;
                console.log(`key: ${e.keyCode}`)
                break;
            default: 
                break;
        }

        this.pressedKeys = keys;
    }

    bindKeys() {
        window.addEventListener('keyup', this.handleKeys.bind(this, false));
        window.addEventListener('keydown', this.handleKeys.bind(this, true));
    }

    unbindKeys() {
	    window.removeEventListener('keyup', this.handleKeys);
	    window.removeEventListener('keydown', this.handleKeys);
    }
}