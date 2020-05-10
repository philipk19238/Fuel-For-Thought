var vehicles = [];
var money = 0;

function setup() {
  createCanvas(640,360);
  for (var i = 0; i < 1; i++) {
    vehicles.push(new Vehicle(width/2,height/2));
  }
}

function draw() {
  background(250);
  
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].display();
    textSize(32);
    fill(0, 102, 153);
    text('$' + str(money), 10, 30);
    if(vehicles[0].clicks === 1){
      fill(0, 0, 0);
      rotate(PI / 4);
      rect(width/2 - 60, height/2 - 418, 15, 100, 8);
      fill(0, 0, 0);
      rotate(PI / 2);
      rect(width/2 - 515, height/2 - 496, 15, 100, 8);
    }
  }
}

function mousePressed() {
  for (var i = 0; i < vehicles.length; i++){
    vehicles[i].balloonSize += 2;
    vehicles[i].tempPosition.y -= 1;
    vehicles[i].bottomBalloonSize += 3;
    vehicles[i].clicks--;
    money++;
  }
  
    if(vehicles[0].clicks === 0){   
      money -= 16;
      vehicles[0] = new Vehicle(width/2,height/2);
    }
}

function keyPressed() {
  if(vehicles[0].clicks === 1){
    money -= 15;
  }
  vehicles[0] = new Vehicle(width/2, height/2); 
}

function Vehicle(x, y) {
  this.colormaps = [[[255, 0, 0], 5], [[0, 255, 0], 8], [[0, 0, 255], 4], [[240, 200, 0], 11]];
  
  this.index = random([0, 1, 2, 3]);
  this.colormap = this.colormaps[this.index];
  this.clicks = this.colormaps[this.index][1] + random([-2, -1, 0, 1, 2]);
  this.position = createVector(x, y);
  this.balloonSize = 70;
  this.bottomBalloonSize = 70;
  this.balloonTie = 45;
  this.tempPosition = createVector(x, y);


  this.display = function() {
    if(this.clicks != 0){
      noStroke();
      push();
      stroke(160);
      strokeWeight(1);
      line(this.position.x, this.position.y + this.balloonTie, this.position.x, this.position.y + this.balloonTie + 100);
      noStroke();
      fill(this.colormap[0][0], this.colormap[0][1], this.colormap[0][2]);
      fill(this.colormap[0][0], this.colormap[0][1], this.colormap[0][2]);
      ellipse(this.tempPosition.x, this.tempPosition.y, this.bottomBalloonSize, this.bottomBalloonSize);
      ellipse(this.position.x, this.position.y + 5, this.balloonSize / 1.06, (this.balloonSize / 1.4) + 30);
      pop();
    }
  };
}
