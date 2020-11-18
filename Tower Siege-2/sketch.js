const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("./bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(650,350,60,60);
    box2 = new Box(750,350,60,60);
    box3 = new Box(850,350,60,60);
    box4 = new Box(950,350,60,60);
    box5 = new Box(1050,350,60,60);

    box6 = new Box(700,290,80,80);
    box7 = new Box(800,290,80,80);
    box8 = new Box(900,290,80,80);
    box9 = new Box(1000,290,80,80);

    box10 = new Box(750,220,60,60);
    box11 = new Box(850,220,60,60);
    box12 = new Box(950,220,60,60);

    box13 = new Box(850,180,200,20);
   
    bird = new Bird(20,100);

 
    slingshot = new SlingShot(bird.body,{x:100, y:200});
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    

    box3.display();
    box4.display();
  
    

    box5.display();
    
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();


    bird.display();
    
   
    slingshot.display();   
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){

    if(keyCode===32){
    
    slingshot.attach(bird.body)
    
    }
    
    
     }