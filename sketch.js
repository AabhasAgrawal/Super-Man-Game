const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird1;
var log1,log2,log3,log4;  
var ball ; 
var rope;
var monster;

function preload(){


}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(800,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(700,100,70,70);
    box12 = new Box(700,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    ball= new A (200,200,200,200);
   
    monster= new T (500,1000,50,50)
	
  

    ground = new Ground(600,600,1200,20);
}
function draw(){
    
    background(0);
    Engine.update(engine);
   ground.display();
    box1.display();
    box3.display();
    box2.display();
    box4.display();
    ball.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box10.display();
    monster.display();
 Decetollision(monster,box1)
 Decetollision(monster,box2)
 Decetollision(monster,box3)
 Decetollision(monster,box4)
 Decetollision(monster,box5)
  

}


function Decetollision (monster,block1){
	block1BodyPosition=block1.body.position
	monsterBodyPosition=monster.body.position 
	var distance=dist (monsterBodyPosition.x,monsterBodyPosition.y,block1BodyPosition.x,block1BodyPosition.y) 
  
	if (distance<=block1.width+monster.width){
  
	  Matter.Body.setStatic(monster.body,false)
  
    }
}