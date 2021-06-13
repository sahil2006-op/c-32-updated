const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var body;


var box1,box2,box3,box4,box5,box6,box7,box8,box9; 
var bird1, slingshot1,platform;
var score = 0;
//games state
var gameState = "onSling";




function setup(){
    var canvas = createCanvas(1200,400);
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;
    body=engine.Bodies;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(720,320,70,70);
    box2 = new Box(900,320,70,70);
    

    box3 = new Box(720,240,70,70);
    box4 = new Box(900,240,70,70);
    

    bird1 = new bird(200,50)

    box5 = new Box(810,320,70,70);
    
    box6 = new Box(810,320,70,70);

    box7 = new Box(740,220,70,70);
    box8 = new Box(880,217,70,70);
    box9 = new Box(804,148,90,70);
    
    slingshot1 = new Slingshot(bird1.body,{x:200, y:50});
}

function draw(){
    background("cyan")
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
        
        
         
    console.log(mouseY,mouseX)
    Engine.update(engine);
    
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

    bird1.display();
    

    platform.display();
   
    slingshot1.display(); 
}



function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
        
    }
}

function mouseReleased(){
    slingshot1.fly();
    gameState = "launched";
  
}

function keyPressed(){
    if((keyCode === 32)){
       gameState="onSling"
       Matter.Body.setPosition(bird1.body,{x:200,y:50});
       slingshot1.attach(bird1.body);
      
           
      }
        
    }
    
    async function getbgImage(){
        var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json()
        var datetime = responseJSON.datetime;
        console.log(datetime)
        var hour = dateTime.slice(11,13)
        if(hour >=6 && hour <18){
            bg = "sprites/wp2847691.jpg"
        }else{
            bg = "download.png"
        }
        backgroundImg = loadImage(bg);
    }


