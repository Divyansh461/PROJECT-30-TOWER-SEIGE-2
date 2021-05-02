const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var engine,world;
var backgroundImg;


function preload() {


    polyimg = loadImage("polygon.png");
  
}

function setup() {
 createCanvas(1600,630);
 

   engine = Engine.create();
   world = engine.world;

   
    
  ground = new Ground(680,600,430,20);
  
ground1 = new Ground(1200,430,330,20);  
  
  box1 = new Box(530,554,50,70);
  box2 = new Box(580,554,50,70);
  box3 = new Box(630,554,50,70);
  box4 = new Box(680,554,50,70);
  box5 = new Box(730,554,50,70);
  box6 = new Box(780,554,50,70);
  box7 = new Box(830,554,50,70);
 
  box11 = new Box(580,460,50,70);
  box12 = new Box(630,460,50,70);
  box13 = new Box(680,460,50,70);
  box14 = new Box(730,460,50,70);
  box15 = new Box(780,460,50,70);

  box21 = new Box(630,390,50,70);
  box22 = new Box(680,390,50,70);
  box23 = new Box(730,390,50,70);

  box25 = new Box(680,320,50,70);
  


  block1 = new Box(1100,395,50,70);
  block2 = new Box(1150,380,50,70);
  block3 = new Box(1200,380,50,70);
  block4 = new Box(1250,380,50,70);
  block5 = new Box(1300,380,50,70);

  block11 = new Box(1150,325,50,70);
  block12 = new Box(1200,325,50,70);
  block13 = new Box(1250,325,50,70);
  
  block15 = new Box(1200,255,50,70);

  var options = {
    restitution:0.5,
    density:1,
    friction:1
  }
  polygon = Bodies.circle(200,500,40,options);
  World.add(world,polygon);
  
  
  rope = new Rope(this.polygon,{x : 200, y : 400 });
  
}


function draw() {
    background(50);
Engine.update(engine);



ground.display();
fill(134,205,233);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

fill(254,191,202);
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

fill(62,233,207);
box21.display();
box22.display();
box23.display();

fill(127,127,127);
box25.display();


ground1.display();
fill(135,206,234);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

fill(62,233,207);
block11.display();
block12.display();
block13.display();

fill(62,233,207);
block15.display();


drawSprites();  


imageMode(CENTER);
  
image(polyimg,polygon.position.x,polygon.position.y,80,80)

rope.display();

}

function mouseDragged () {
    Matter.Body.setPosition(this.polygon,{x : mouseX ,y : mouseY});
    
}

function mouseReleased() {
    rope.fly();
}


function keyPressed() {
    if(keyCode === 32) {
        
        //Matter.Body.setPosition(polygon, {x:200, y:400});
        rope.attach(this.polygon);
       
    }
}

