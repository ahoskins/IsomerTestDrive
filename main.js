/**
 * Created by Andrew on 14-11-06.
 */

var iso = new Isomer(document.getElementById("art"));

var Shape = Isomer.Shape;
var Point = Isomer.Point;

var blue = new Isomer.Color(50, 60, 160);
var red = new Isomer.Color(160, 50, 60);
var cube = Shape.Prism(Point.ORIGIN);

iso.add(cube, blue);
/* These methods do not modify the
original shape/path/point */
iso.add(cube.translate(0, 0, 1.1), blue);
iso.add(cube.translate(0, 0, 2.2), blue);

var butt = document.getElementById("add");
var increment = 3.3;
butt.addEventListener("click", function() {
    iso.add(cube.translate(0, 0, increment), blue);
    increment += 1.1;
});

var drawFromBottom = function() {
    var start = 0;
    while (start < increment) {
        if (start == redLocation) {
            iso.add(cube.translate(0, 0, start), red);
        }
        else {
            iso.add(cube.translate(0, 0, start), blue);
        }

        start += 1.1;
    }
};

var color = document.getElementById("color");
var redLocation = 0;
color.addEventListener("click", function() {
    // Draw from bottom
    drawFromBottom();
    redLocation += 1.1;

});