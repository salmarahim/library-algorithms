var rect1,rect2;
var rect3,rect4;
var gameObject1,gameObject2;


function setup() {
  createCanvas(800,400);
  rect1=createSprite(0,200,50,100)
  rect2=createSprite(800,200,50,100)
  
  rect1.shapeColor="red";
  rect2.shapeColor="green";
  rect1.debug=true;
  rect2.debug=true;
  rect1.velocityX=5;
  rect2.velocityX=-5;
  rect3= createSprite(400,200,50,100);
  rect3.shapeColor="blue";
  rect3.debug=true;
  rect4= createSprite(400,200,50,100);
  rect4.shapeColor="pink";
  rect4.debug=true;

  gameObject1= createSprite(200,200,50,100);
  gameObject1.shapeColor="blue";
  gameObject1.debug=true;

  gameObject2= createSprite(600,200,50,100);
  gameObject2.shapeColor="blue";
  gameObject2.debug=true;
}

function draw() {
  background(255,255,255);  
  
   rect4.x=mouseX;
   rect4.y=mouseY;

bounceOff(rect1,rect2);

if(isTouching(gameObject2,rect4)){
  gameObject2.shapeColor="brown";
  rect4.shapeColor="brown";
}
else{
  gameObject2.shapeColor="blue";
  rect4.shapeColor="pink";
}


  drawSprites();
}

