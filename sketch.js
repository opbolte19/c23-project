const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world

var roof;
var ball
var ball2
var ball3
var ball4
var ball5

var rope1
var rope2
var rope3
var rope4
var rope5



//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		isStatic: true
	}

	var ball2_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		isStatic: true
	}

	var ball3_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		isStatic: true
	}

	var ball4_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		isStatic: true
	}

	var ball5_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		isStatic: true
	}

	

	
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);











	ball = Bodies.circle(400,350,40,ball_options);
	World.add(world,ball);

	ball2 = Bodies.circle(350,350,40,ball2_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(450,350,40,ball3_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(300,350,40,ball4_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(500,350,40,ball5_options);
	World.add(world,ball5);

rope1 = new rope(ball,roof,-5,0)
rope2 = new rope(ball2,roof,-50,0)
rope3 = new rope(ball3,roof,+50,0)
rope4 = new rope(ball4,roof,-100,0)
rope5 = new rope(ball5,roof,+100,0)
	


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,40,40);
  ellipse(ball2.position.x,ball2.position.y,40,40);
  ellipse(ball3.position.x,ball3.position.y,40,40);
  ellipse(ball4.position.x,ball4.position.y,40,40);
  ellipse(ball5.position.x,ball5.position.y,40,40);
  
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed()
{
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:-50,y:-45})
}


}