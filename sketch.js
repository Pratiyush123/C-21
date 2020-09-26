var mr,fr,fr2;

function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 80);
  fr.shapeColor = "red";
  fr.debug = true;
  fr2 = createSprite(100, 200, 50, 80);
  fr2.shapeColor = "red";
  fr2.debug = true;
  mr = createSprite(100,200,80,30);
  mr.shapeColor = "red";
  mr.debug = true;
}

function draw() {
  background(255,255,255);
  mr.x = World.mouseX;
  mr.y = World.mouseY;

  isTouching(mr,fr);
  isTouching(mr,fr2);
  
  drawSprites();
}

function isTouching(mr1,fr1) {

  if(mr1.x-fr1.x < fr1.width/2 + mr1.width/2 
    && fr1.x - mr1.x < fr1.width/2 + mr1.width/2 
    && mr1.y - fr1.y < fr1.height/2 + mr1.height/2
    && fr1.y - mr1.y < fr1.height/2 + mr1.height/2) {
      mr1.shapeColor = "blue";
      fr1.shapeColor = "blue";
    
  } else {
      mr1.shapeColor = "red";
      fr1.shapeColor = "red"; 
  }

}