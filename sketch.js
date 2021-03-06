const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground2;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;  
var birds1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    box5 = new box(810,160,70,70);
    ground2 = new ground(600,height,1200,20);
    pig1 = new pig(810,220);
    pig2 = new pig(810,350);
    log1 = new log(810,180,300,PI/2);
    log2 = new log(810,260,300,PI/2);
    log3 = new log(760,120,150,PI/7);
    log4 = new log(870,120,150,-PI/7);
    birds1 = new birds(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground2.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    birds1.display();
}