export default class GameObject {
    constructor(args) {
        this.x = args.x;
        this.y = args.y;
        this.velocity = args.velocity;
        this.id = args.id;
    }

    render(state) {
        if (this.x > state.screen.width || this.x < state.screen.width)
            this.x = this.x > state.screen.width ? this.screen.width : 0;
        if (this.y > state.screen.height || this.y < state.screen.height) 
            this.y = this.y > state.screen.height ? this.screen.height : 0;
    }
}