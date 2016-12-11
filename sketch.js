var x = 20;
var posy = 100;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(10);




} 

var value = 0

function deviceTurned() {
  if (value == 0){
    value = 255
  } else if (value == 255) {
    value = 0;
  }
}

function deviceShaken() {
  posy = posy + 1;
  if (posy > height-100) {
    posy = 100;
  }
}

function draw() {
    
   background(100,100,255,70);
        
    fill(value);
    ellipse(width/2, posy, 200, 200);

    
   /* if(touchIsDown){
    
    var colorList = ['#eeeeee',
                 '#333333',
                 '#eeeeee',
                 '#333333',
                 '#eeeeee'
                 ];    
        
    } else {
        
        colorList = ['#333333',
                 '#eeeeee',
                 '#333333',
                 '#eeeeee',
                 '#333333'
                 ];
        
    }
        
    for(index=0; index < colorList.length; index++){
    
    y = x - 50;
    x = y;
        
    fill(colorList[index]);

    ellipse(width/2, posy, 200-40*index);

    }*/
    
  
}

