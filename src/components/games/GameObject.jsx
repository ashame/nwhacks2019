class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.contains = function (x, y) {
            return this.x <= x && x <= this.x + this.w &&
                   this.y <= y && y <= this.y + this.h;
        }
    }
}

export default class GameObject {
    constructor(args) {
        this.pos = args.pos;
        this.velocity = args.velocity;
        this.poly = args.poly;
        this.getBoundingRectangle = () => {
            return new Rectangle(this.pos.x, this.pos.y, this.poly.width, this.poly.height);
        }
    }
}