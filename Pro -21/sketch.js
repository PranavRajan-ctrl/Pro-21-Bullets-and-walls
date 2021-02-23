var bullet,wall;

var speed,wieght;
function setup() {
  createCanvas(1600,600);
  bullet = createSprite(50,200,50,50);
  speed =random(55,90);
  wieght =random(400,1500);
}





function draw(){ 
    background(0); 
    if(wall.x-bullet.x < (bullet.width+wall.width)/2) { 
      bullet.velocityX=0; var deformation=0.5 * weight * speed* speed/22500;
       if(deformation>180) { 
         bullet.shapeColor=color(255,0,0);
       }
        if(deformation<180 && deformation>100) {
           bullet.shapeColor=color(230,230,0);
        } 
        if(deformation<100) {
           bullet.shapeColor=color(0,255,0);
       }
   } 
           drawSprites();
}
