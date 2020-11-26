
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject
var world

var paper

var ground
var dustbin
function preload()
{
	

dustbinObject = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1= new Dustbin(500,580,200,100)
	dustbin2= new Dustbin(500,580,1,100)
	dustbin3= new Dustbin(680,580,1,100)

ground= new Ground(width/2, height-35, width,10)
paper= new Paper(100,620,50)

Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
paper.display()
ground.display()
dustbin1.display()

}

function keyPressed(){

	if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x : 125 ,y:-85})
		
	}
	

}

