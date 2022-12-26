// Array.prototype.faul = function () {
//     return `${this},0`;
// };
class Color {
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }
    prergb() {
        const {r,g,b} = this
        return `${r},${g},${b}`
    }

    rgb() {
        return `rgb(${this.prergb()})`
    }

    rgba(a=1.0) {
        return `rgba(${this.prergb()},${a})`
    }

    rgbToHex() {
        const {r, g, b} = this
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
}

const white = new Color(255,255,255)




