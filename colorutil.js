module.exports = {
    luminosity: function(red, green, blue){
        var red = process.argv[2];
        var green = process.argv[3];
        var blue = process.argv[4];

        return ((red*.2126) + (green*.7152) + (blue*.0722));
    }
};