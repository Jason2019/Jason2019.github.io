/*refer to Wavemaker example on the https://p5js.org/examples/interaction-wavemaker.html */

let t = 0; // time variable

function setup() {
var cnv = createCanvas(88, 88);
  // positions canvas 50px to the right and 100px
  // below upper left corner of the window
  cnv.position(0, 0);
 /* var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;

cnv.position(x, y);
 */ noStroke();
  fill(0,0,0);
  background(0,0,0);

}

function draw() {
  background(255,50); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 10) {
    for (let y = 0; y <= height; y = y + 10) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 10 * cos(2 * PI * t + angle);
      let myY = y + 10 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 5); // draw particle
    }
  }

  t = t + 0.01; // update time
}
