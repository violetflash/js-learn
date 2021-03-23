
function makeColor(r, g, b) {
  //  This function makes us an object
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = function() {
    const {r, g, b} = this;
    return '#' + ( (1 << 24) + (r >> 16) + (g << 8) + b).toString(16).slice(1);
  }

  color.rgba = function(a = 1) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  return color;
}

function randomColor() {
  return `${Math.floor(Math.random() * 256)}`;
}


const green = new MakeColor(0, 255, 0);
const white = new MakeColor(255, 255, 255);