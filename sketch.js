var car,wall;

var car2,wall2;

var speed,weight;

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,800);

  car = createSprite(50, 200, 30, 30);
  car.velocityX=speed;
  wall = createSprite(750,200,40,height/2);
  wall.shapeColor="brown";
}

function draw() {
  background(0);
  

  if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0;
   var deformation=0.5*weight*speed*speed/22509;
   console.log(deformation)
   deformation=200;
   if(deformation<180&&deformation>100){
    car.shapeColor=color(230,230,0);
   }

   if(deformation<100){
    car.shapeColor=color(0,255,0);
   }
  }

  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }

  wall.depth=car.depth;
  car.depth+=1;

  drawSprites();
}