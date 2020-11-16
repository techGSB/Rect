var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "black";
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "black";
}

function draw() {
movingRect.x = mouseX;
movingRect.y = mouseY;
if(fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2 
  && movingRect.x-fixedRect.x<= fixedRect.width/2+movingRect.width/2 
  && fixedRect.y-movingRect.y<= fixedRect.height/2+movingRect.height/2 
  && movingRect.y-fixedRect.y<= fixedRect.height/2+movingRect.height/2 
 )
 {
 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";
  }else 
  {
    fixedRect.shapeColor = "black";
    movingRect.shapeColor = "black";
  }
  console.log(fixedRect.x-movingRect.x);

  background(255,255,255);  
  drawSprites();
}