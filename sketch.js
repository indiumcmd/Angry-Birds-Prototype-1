const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    pig1 = new Pig(670,380);
    box1 = new Box(600,470,60,60);
    box2 = new Box(750,470,60,60);
    box3 = new Box(600,390,60,60);
    box4 = new Box(750,390,60,60);
    box5 = new Box(675,310,60,60);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(675,440,210,PI/2)
    log2 = new Log(675,360,210,PI/2)
   // log3 = new Log(630,320,180,PI/4)
   // log4 = new Log(675,340,180,PI/4)
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    //log3.display();
}