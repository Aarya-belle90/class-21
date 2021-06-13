var FR, MR;
var box1, box2, box3, box4;

function setup() {
  createCanvas(1200,600);
  FR = createSprite(400,500,50,80);
  MR = createSprite(400, 200, 80, 30);

  box1=createSprite(100,100,50,50);
  box1.shapeColor="green";
  box2=createSprite(200,100,50,50);
  box2.shapeColor="green";
  box3=createSprite(300,100,50,50);
  box3.shapeColor="green";
  box4=createSprite(400,100,50,50);
  box4.shapeColor="green"; 
  box4.velocityY=3;

}

function draw() {
  background(255,255,255); 
  
  MR.x = World.mouseX;
  MR.y = World.mouseY;

if(isTouching(MR,box2)){
  box2.shapeColor = "purple";
  MR.shapeColor = "purple";
}
else {
  box2.shapeColor = "green";
  MR.shapeColor = "green";
}
bounceoff(box4,FR);

  console.log(FR.width/ 2 + MR.width/2);
  console.log(MR.x - FR.x);

  drawSprites();
}
 







