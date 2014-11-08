/**
 * Created by Andrew Hoskins on 14-11-06.
 * Using Jordan Scale's graphics library: Isomer
 */

// Init
//
var iso = new Isomer(document.getElementById("art"));

var Shape = Isomer.Shape;
var Point = Isomer.Point;

var cube = Shape.Prism(Point.ORIGIN);
var thin = cube.scale(Point.ORIGIN, 3, 3, 0.5);

var blue = new Isomer.Color(50, 60, 160);
var red = new Isomer.Color(160, 50, 60);


// Add some shapes
//
iso.add(thin, blue);
iso.add(thin.translate(0, 0, 1.1), blue);
iso.add(thin.translate(0, 0, 2.2), blue);


// Store some references to page elements
//
var growPile = document.getElementById("grow-pile");
var up = document.getElementById("up");
var down = document.getElementById("down");

var nextTopLocation = 3.3;
var redLocation = -1.1;

// Handle events
//
growPile.addEventListener("click", function() {
    iso.add(thin.translate(0, 0, nextTopLocation), blue);
    nextTopLocation += 1.1;
});

up.addEventListener("click", function() {
    // Draw from bottom
    redLocation += 1.1;
    drawFromBottom();
});

down.addEventListener("click", function () {
    redLocation -= 1.1;
    drawFromBottom();
});

// Inline function to change location of red sheet in stack
//
var drawFromBottom = function() {
    var start = 0;
    while (start < nextTopLocation) {
        if (start == redLocation) {
            iso.add(thin.translate(0, 0, start), red);
        }
        else {
            iso.add(thin.translate(0, 0, start), blue);
        }

        start += 1.1;
    }
};

// Watch for location of red sheet
//
// Keep red location at most one position off the boundaries of the shape stack
setInterval(function () {
    if (redLocation < -1.1) {
        redLocation = - 1.1;
    }
    if (redLocation > nextTopLocation) {
        redLocation = nextTopLocation;
    }
}, 50);