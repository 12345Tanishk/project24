const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);
   computer = new Computerplayer(width - 280,computerBase.body.position.y - 153,50,180);
   playerbase = new playerBase(300,random(450,height-300),180,150);
   player1 = new player(285,playerbase.body.position.y-153,50,180);
}
function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   computer.display();
   //display Player and computerplayer
   playerbase.display();
   player1.display();
}
