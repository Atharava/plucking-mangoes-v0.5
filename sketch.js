const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grip1, rock1, m1, m2, m3, m4;
var boy;
var ground, groundSprite, tree;

var argument;
	var TRUE = 0;
	var FALSE = 1;

var boyImg, treeImg, bgImg;

function preload(){
	boyImg = loadImage("boy.png");
	treeImg = loadImage("Tree.png");
	bgImg = loadImage("backyard.jpg")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	tree = createSprite(550, 350, 50, 200);
	tree.addImage(treeImg);
	tree.scale = 0.7;
	tree.depth = 0;

	// argument = FALSE;

	groundSprite = createSprite(400, 650 , 800, 20, {isStatic: true});
	ground = rect(400, 650 , 800, 20, {isStatic: true});

	rock1 = new rock(164, 489);

	boy = createSprite(100, 515, 100, 100);
	boy.addImage(boyImg);
	boy.scale = 0.5;
	boy.depth = -1;

	m1 = new mango(410, 180);
	m2 = new mango(512, 115);
	m3 = new mango(560, 239);
	m4 = new mango(689, 128);

	grip1 = new grip(rock1.stone, {x: 164, y: 489});

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(bgImg);

	// console.log("x: "+mouseX);
	// console.log("y: "+mouseY);

	// if(argument === TRUE){
	// 	Matter.Body.setPosition(rock1.stone, {x: mouseX, y: mouseY});
	// }else{
	// 	argument = FALSE;
	// }

	m1.display();
	m2.display();
	m3.display();
	m4.display();

	grip1.display();

	rock1.display();

	drawSprites();
	
}

function mouseDragged(){
	// argument = TRUE;
	Matter.Body.setPosition(rock1.stone, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	// argument = FALSE;
	grip1.fly();
}

function keyPressed(){
	if(keyCode === 32){
		grip1.holdAgain({x: 164, y: 489});
	}
}