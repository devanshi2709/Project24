
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle,circleBody;
var Ground;
var part1,part2,part3;
var body1,body2,body3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	part1= createSprite(400,600,20,100);
	part1.shapeColor="green";

	part2= createSprite(220,220,200,20);
	part2.shapeColor="green";

	part3= createSprite(220,600,20,100);
	part3.shapeColor="green";

	/*partBody1= Bodies.rectangle(490,10,20,100,{isStatic:true});
	World.add(world,partBody1);
	partBody2= Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,partBody2);
	partBody3= Bodies.rectangle(310,640,20,100,{isStatic:true});
	World.add(world,partBody3);*/

	body1= Bodies.rectangle(690,640,20,100,{isStatic:true});
	World.add(world,body1);

	body2=Bodies.rectangle(600,682,200,20,{isStatic:true});
	World.add(world,body2);

	body3=Bodies.rectangle(510,640,20,100,{isStatic:true});
	World.add(world,body3);

	 circle = new paper(50,500,30);
	 Ground= new ground(400,700,800,20);
	 //part1 = new dustbinPart(400,400,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  	part1.x= body1.position.x;
	part2.x= body2.position.x;
	part3.x= body3.position.x;

	part1.y= body1.position.y;
	part2.y= body2.position.y;
	part3.y= body3.position.y;

	 circle.display();
	 Ground.display();
	 
	 //part1.display();

	 /*if (circle.x<0 || circle.x>400 || circle.y<0 || circle.y>400){


		circle.x=100;
		circle.y=500;
	 }*/
  
	 keyPressed();
  drawSprites();
 
}


function keyPressed(){

	if (keyCode=== UP_ARROW){

		Matter.Body.applyForce(circle.body,circle.body.position,{x:3,y:-2});

	}

}
