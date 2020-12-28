var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1, side2, side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1 = createSprite(330,610,20,100);
	side1.shapeColor=color("red");

	side2 = createSprite(450,610,20,100);
	side2.shapeColor=color("red");

	side3 = createSprite(390,650,100,20);
	side3.shapeColor =color("Red");
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y 
 rectMode(CENTER);
  rect(packageBody.position.x,packageBody.position.y,30,30);
  drawSprites();
 
}

function keyPressed() {
	{ if (keyCode === DOWN_ARROW) {
		 Matter.Body.setStatic(packageBody,false); }
		 }	
    
  }



