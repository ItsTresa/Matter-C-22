const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var ball,surface;
var ball2;

var engine1,world1;

function setup() {
 var canvas= createCanvas(800,400);
engine1=Engine.create();
world1=engine1.world;

var option_ground=
{
  isStatic:true
}

var option_ball =
{  restitution:    2.0 }  //physics
 
ball=Bodies.circle(200,100,30,option_ball);
World.add(world1,ball);
ball2=Bodies.circle(100,50,20,option_ball);
World.add(world1,ball2);
surface=Bodies.rectangle(350,320,700,30,option_ground)
World.add(world1,surface);
}

function draw() {
  background(255,255,255); 
Engine.update(engine1);

rect111(); // calling
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30);
ellipseMode(RADIUS);
ellipse(ball2.position.x,ball2.position.y,20);
 
}
function rect111()
  {
    rectMode(CENTER);
rect(surface.position.x,surface.position.y,700,30);
  }
