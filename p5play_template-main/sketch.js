var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,100,20,40);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    background("purple")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("pink")
  }
  if(keyIsDown(UP_ARROW)){
    background("lightblue")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("skyblue")
  }
drawSprites();
}




