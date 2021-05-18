var fixedrect,fixedrectImg
var movingrect,movingrectImg

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,400,50,50);

  fixedrect.velocityX = -1;
  movingrect.velocityX = +1;
}

function draw() {
  background(255,255,255);
  
  bounceOff(movingrect,fixedrect); 

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
    {
      movingrect.shapeColor = "pink"
      fixedrect.shapeColor ="pink"
    }
    else{
      movingrect.shapeColor = "orange"
      fixedrect.shapeColor = "orange"
    }
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x <object1.width/2+object2.width/2
    &&object2.x-object1.x <object2.width/2+object1.width/2){
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
    } 
  if(object1.Y-object2.Y <object1.height/2+object2.height/2
      &&object2.Y-object1.Y <object2.height/2+object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
      } 
}

