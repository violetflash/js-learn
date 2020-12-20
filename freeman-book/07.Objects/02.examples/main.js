function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        var size = "";
        if (this.ounces === 8) {
            size = "small";
        } else if (this.ounces === 12) {
            size = "medium";
        } else {
            size = "large";
        }
        return size;
    }
    this.toString = function () {
        return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
    }
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
