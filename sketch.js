
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var dustbin2;
var dustbin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(150,620,30);
ground=new Ground(400,650,1600,10);
dustbin=new Dustbin(745,600,20,100);
dustbin2=new Dustbin(650,600,20,100);
dustbin3=new Dustbin(700,640,100,20);


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  paper.display();
  dustbin.display();
  dustbin2.display();
  ground.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}


}



