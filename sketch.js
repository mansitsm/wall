var wall,thickness;
var bullet,speed,weight;

function setup(){
createCanvas(400,400);
wall=createSprite(200,200,thickness,height);
wall.shapeColor="green"

}
function draw(){
thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
hasCollided();
drawSprites();



}




function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true   

}
return false;

if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if(damage>10)
{
      wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
wall.shapeColor=color(0,255,0);

}

}


