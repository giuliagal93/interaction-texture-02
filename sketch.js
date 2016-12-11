var x = 20;
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(10);
        background(200,100,255,100);

} 

var posx = 0;

function draw() {
    
    if(touchIsDown){
    
    var colorList = ['#333333',
                 '#eeeeee',
                 '#333333',
                 '#eeeeee',
                 '#333333'
                 ];
    
                   }
    else {
        var colorList = ['#eeeeee',
                 '#333333',
                 '#eeeeee',
                 '#333333',
                 '#eeeeee'
                 ];
        
    }
        
    for(index=0; index < colorList.length; index++){
    
    /*y = x - 50;
    x = y;*/
        
    fill(colorList[index]);

      
    ellipse(posx, height/2, 300-60*index);

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
  posx = posx + 5;
  if (posx > width) {
    posx = 0;
  }
}
