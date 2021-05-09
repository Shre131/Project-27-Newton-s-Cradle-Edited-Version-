const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1,bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope;
var chain1, chain2, chain3, chain4, chain5;
var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bobObject1= new BOB(320,600,10);
bobObject2= new BOB(360,600,50);
bobObject3= new BOB(410,600,50);
bobObject4=new BOB(460,600,50);
bobObject5=new BOB(510,600,50);
roof=new ROOF(width/2,height/4,width/2,30);
chain1=new ROPE(bobObject1.body,roof.body,-bobDiameter*2,0);
chain2=new ROPE(bobObject2.body,roof.body,-bobDiameter*1,0);
chain3=new ROPE(bobObject3.body,roof.body, 0,0);
chain4=new ROPE(bobObject4.body,roof.body,bobDiameter*1,0);
chain5=new ROPE(bobObject5.body,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 roof.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode===32) {
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-80,y:-40});
  }
}


