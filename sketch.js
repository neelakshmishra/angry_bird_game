const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const On_sling = 5
const not_on_sling =10

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot,sling1Img,sling2Img,sling3Img;
var timeApi = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
var backgroundNight
var backgroundFinal
var gameState = On_sling

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    backgroundNight =loadImage("sprites/bg2.jpg")
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,25);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:60});
    time();
}

function draw(){
    if(backgroundFinal != undefined){
        background(backgroundFinal);
    }
    else{
        background(backgroundNight)// when we dont know the time then bgNight would be displayed\
    }
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
     if(gameState === On_sling){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = not_on_sling
    
}
async function time(){
var timeResponce = await fetch(timeApi)
var timeResponceJason = await timeResponce.json()
//console.log(timeResponceJason.datetime)
var hour =timeResponceJason.datetime.slice(11,13)
console.log(hour)
if (hour>18){
 //this is night time
 backgroundFinal = backgroundNight
}
else{
//this is night time
backgroundFinal = backgroundImg
}
}
function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body,{
           x:100,y:25
       })
       Matter.Body.setAngle(bird.body,0)
       bird.clearSmoke();
       gameState=On_sling
       slingshot.attach();
    }
}