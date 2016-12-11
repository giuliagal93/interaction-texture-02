var value = 0;
var x = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
} 


function draw() {
    
    background(50,50);
    
    if(touchIsDown) {
        
        for(i=0; i < 1 ; i++) {
         var y = x + 1;
         x = y;
        };
        
    } else {
            x = 20;
        };

        
            
    noStroke;
    fill(220);
               rect(0,0,windowWidth,x);

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
