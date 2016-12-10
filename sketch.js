var value = 0;
var x = 20;
function setup() {
  createCanvas(windowWidth, windowHeight)
}

function touchStarted() {
    if (value == 0) {
    value = 255;
  } else {
    value = 0;
  };
    
    x = x + 10;
}

function touchEnded() {
if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }    
        x = x + 10;
}

function draw() {
    background(50);
    
    noStroke;
    fill(value);
    rect(0,0,windowWidth,x);
      return false;

  
  /*// Define one color for each touch point
  var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093',
                 '#ffe2e6',
                 '#6eb66d',
                 '#ffa960',
                 '#2b61ce',
                 '#c496d7',
                 '#6faaec',
                 '#fea24d'
                 ];
  
  for(var i=0; i < touches.length; i++) {
    
var touch = touches[i];
    fill(colorList[i]);
    ellipse(touch.x, touch.y, 150, 150);
  }*/
}
