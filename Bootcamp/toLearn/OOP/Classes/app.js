// function MakeColor(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
//
// MakeColor.prototype.rgb = function() {
//   const {r, g, b} = this;
//   return `rgb(${r}, ${g}, ${b})`;
// }
//
// MakeColor.prototype.hex = function() {
//   const {r, g, b} = this;
//   return '#' + ( (1 << 24) + (r >> 16) + (g << 8) + b).toString(16).slice(1);
// }
//
// MakeColor.prototype.rgba = function(a = 1) {
//   const {r, g, b} = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// }
//
// const green = new MakeColor(0, 255, 0);
// const white = new MakeColor(255, 255, 255);

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;

  }

  innerRGB() {
    const {r, g, b} = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const {r, g, b} = this;
    return '#' + ( (1 << 24) + (r >> 16) + (g << 8) + b).toString(16).slice(1);
  }

  greet() {
    return `HELLO! I'M ${this.name.toUpperCase()} COLOR!`;
  }
}

const tomato = new Color(255, 67, 89, 'tomato');