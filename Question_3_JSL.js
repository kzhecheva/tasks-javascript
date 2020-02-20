const colorChecker = color => {
    if (color == null) {
        return 'Please enter a color'
    } else if (color.startsWith('#')) {
        return hexToRgb(color);
    } else {
        return rgbToHex(color);
    }
}

const rgbToHex = rgb => {
    let y = rgb.match(/[0-9.]+/g).map(function(x) {
        // console.log(`Matched: ${x}`);
        return parseInt(Math.floor(Number(x))).toString(16).padStart(2, '0')
    });
    return "#" + y.join('').toUpperCase();
}

const hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

console.log(colorChecker('12.5, 13.4, 155'));