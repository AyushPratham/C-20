var fixedRect, movingRect

function setup() {
  createCanvas(400,400);
fixedRect = createSprite(200, 200, 50, 50);
movingRect = createSprite(100,200,50,50);
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
movingRect.debug = true;
fixedRect.debug = true;
}

function draw() {
  background(0);  
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
}
else{
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
}
  drawSprites();
}