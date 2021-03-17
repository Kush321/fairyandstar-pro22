var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invisBox;
var PLAY=1;
var END=0;
var gameState=PLAY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	invisBox=createSprite(250,530,20,20);
	invisBox.visible = false;
	Engine.run(engine);

}


function draw() {
	fairyVoice.play();
  background(bgImg);
  if(keyDown("RIGHT_ARROW")){
	fairy.x=fairy.x+2;
	invisBox.x=invisBox.x+2;
  }
  if(keyDown("LEFT_ARROW")){
	fairy.x=fairy.x-2;
	invisBox.x=invisBox.x-2;
  }
  if(keyDown("DOWN_ARROW")){
	star.velocityY=5;
  }
  if(star.isTouching(invisBox)){
	  star.velocityY=0;
	  star.x=invisBox.x;
  }
  drawSprites();

}


