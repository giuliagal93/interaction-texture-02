var x = 20;
var posy = 100;


function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
   background(100,200,100,70);




} 

var valueR = 240;
var valueG = 60;
var valueB = 90;

function deviceTurned() {
  if (valueR == 240 && valueG == 60 && valueB == 90){
    valueR = 240;
    valueG = 200;
    valueB = 60;
  } else if (valueR == 240 && valueG == 200 && valueB == 60) {
    valueR = 240;
    valueG = 60;
    valueB = 90;
  }
}

function deviceShaken() {
     background(100,200,100,70);
  
    
//  touchY = touchY + 1;
//  if (touchY > height-100) {
//    touchY = 100;
//  }
}

function draw() {
    
        
    fill(valueR, valueG,valueB);
    ellipse(touchX, touchY, 30, 30);

    
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

