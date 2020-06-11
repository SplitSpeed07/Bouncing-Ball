function setup() {
  createCanvas(400,400);
  ball=createSprite(400, 200, 50, 50);
  moving=createSprite(100, 100, 50, 50);
  ball2=createSprite (0, 200, 50, 50)
 ball.velocityX = -4
 ball2.velocityX = 4
}

function draw() {
  background("black");  
  drawSprites();
moving.x=mouseX
moving.y=mouseY
if (touching (moving, ball)) {
  moving.shapeColor = "blue"
  ball.shapeColor = "blue"
}
else {
  moving.shapeColor = "green"
  ball.shapeColor = "green"
}
if (touching (moving, ball2)){
  moving.shapeColor = "orange"
  ball2.shapeColor = "orange"
}
else {
  moving.shapeColor = "green"
  ball2.shapeColor = "yellow"
}
if (bounceoff (ball, ball2)) {
  ball.velocityX = 4
  ball2.velocityX = -4
}
}

function touching(object1, object2) {
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
return true
    }
    else {
      return false
    }
}

function bounceoff(object1, object2) {
if (object1.x-object2.x<object1.width/2+object2.width/2
  && object2.x-object1.x<object1.width/2+object2.width/2
  && object1.y-object2.y<object1.height/2+object2.height/2
  && object2.y-object1.y<object1.height/2+object2.height/2) {
   return true
}
else {
  return false
}
}