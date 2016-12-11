var x = 20;
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(10);

} 

var posy = 0;

function draw() {
    
    background(200,100,255,100);
    
    if(touchIsDown){
    
    var colorList = ['#eeeeee',
                 '#333333',
                 '#eeeeee',
                 '#333333',
                 '#eeeeee'
                 ];    
        
    
                   }
    else {
        colorList = ['#333333',
                 '#eeeeee',
                 '#333333',
                 '#eeeeee',
                 '#333333'
                 ];
        
    }
        
    for(index=0; index < colorList.length; index++){
    
    /*y = x - 50;
    x = y;*/
        
    fill(colorList[index]);

      
    ellipse(width/2, posy, 200-40*index);

    }
    

    /*
    
    fill(colorList[0]);
    ellipse(width/2, height/2, 400,400)
    
    
    
    
    if(touchIsDown) {
        
        for(i=0; i < 1 ; i++) {
         var y = x + 1;
         x = y;
        };
        
    } else if(touchIsReleased){
          for(i=0; i < 1 ; i++) {
         var y = x - 1;
         x = y;
        };
        };

        
            
    noStroke;
    fill(220);
               rect(0,0,windowWidth,x);
*/
  
}

function deviceShaken() {
  posy = posy + 1;
  if (posy > width) {
    posy = 0;
  }
}
