// luminosity = 0.2126*r + 0.7152*g + 0.0722*b

var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];

var luminosity = (red*.2126) + (green*.7152) + (blue*.0722);

var lightDark;
luminosity > 155 ? lightDark = "light" : lightDark = "dark";

console.log(lightDark);