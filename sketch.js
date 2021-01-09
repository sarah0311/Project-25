
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, ground, dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1000,700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(60,435,25);

	dustbin1 = new Dustbin(800,435,100,20);
	dustbin2 = new Dustbin(740,350,20,160);
	dustbin3 = new Dustbin(860,350,20,160);

	ground = new Ground(500,450,1500,10);

	keyPressed();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  imageMode(CENTER);
  image(dustbinImage,800,360,150,180);

  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 120, y: -120});
	}
}