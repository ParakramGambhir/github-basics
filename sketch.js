var monkey, banana2,stone, backGround;
var score;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  player = loadAnimation
("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png", "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana22 = loadImage("banana.png");
  
  stones = loadImage("stone.png");
  
  backGrounds = loadImage("jungle.jpg");
  
    
}

function setup() {
  createCanvas(400, 400);
 
 backGround = createSprite(200, 200);
  backGround.addImage("scene", backGrounds);
  backGround.x = backGround.width /2;
  backGround.velocityX = -4;
  
  monkey = createSprite(100, 310, 20, 50);
monkey.addAnimation("run",player);
monkey.scale = 0.1;

  
  score = 0;
   bananaG = new Group();
   obstacleG = new Group();
}
function fruit() {
  if (frameCount%80===0) {
    var banana2 = createSprite(400, 200, 10, 10);
    banana2.addImage(banana22);
    banana2.scale = 0.05;
    banana2.velocityX = -8;
    banana2.lifetime = 50;
    banana2.y = random(60, 250);
    bananaG.add(banana2);
  }
  //if (bananaG.isTouching(monkey)) {
  //  bananaG.destroyEach();
 // }

}

function Obstacle(){
  if (frameCount%60===0) {
    var stone = createSprite(400, 350, 10, 10);
    stone.addImage("obstacle", stones);
    stone.velocityX = -8;
    stone.scale = 0.2;
    stone.lifetime = 50;
    obstacleG.add(stone);
  }




}

function draw() {
  background(220);
  
  
  if (gameState===PLAY){
    Obstacle();
    fruit();
    if (monkey.y>359 && keyDown("space")) {
    monkey.velocityY = -20;
  }
    if (backGround.x < 0){
     backGround.x = backGround.width/2;
    }
     monkey.velocityY = monkey.velocityY+0.8;
   edges=createEdgeSprites(); 
  monkey.collide(edges);
    
    if (bananaG.isTouching(monkey)) {
    bananaG.destroyEach();
    score=score+2
  }
    switch (score){
      case 10 : monkey.scale=0.12;
      break;
      case 20 : monkey.scale=0.14;
      break;
      case 30 : monkey.scale=0.16
      break;
      case 40 : monkey.scale=0.18;
      break;
      default : break;
   }
     if (obstacleG.isTouching(monkey)){
    monkey.scale=0.05;
  }
    
    
  }
  
  if (gameState===END){
      
    
  }
  

  
  
 
  
  
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: " +score, 100, 50);
  
 
  
   //if (obstacleG.isTouching(monkey)&& //(monkey.scale===0.2)){
 //   gameState=END;
 // }
  
   
  
  drawSprites();
    
}