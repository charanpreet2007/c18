var PLAY = 1
var END = 0;

var gameState = 1;



var sword,fruit,monster;
var swordimage,fruit1,fruit2,fruit3,fruit4,monsterimage;
function preload(){
  swordimage = loadImage("sword.png")
fruit1 = loadImage("fruit1.png")
 fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4  = loadImage("fruit4.png")
  monsterimage=loadAnimation("alien1.png","alien2.png")
   gameOverImage = loadImage("gameover.png")
}

function setup() {
createCanvas(windowWidth,windowHeight)

  sword=createSprite(40,200,20,20)
  sword.addImage(swordimage)
  sword.scale=0.5

  
   score=0;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  
}
function draw(){
background("lightblue")
  
  if (gameState=== PLAY){
    
    
     fruits();
    Enemy();
    
      
   sword.y=World.mouseY
    sword.x=World.mouseX
     
     if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
    }
    else
  {

   if(enemyGroup.isTouching(sword)){
        gameState=END;
        
        fruitGroup.destroyEach();
        enemyGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
  
     
      sword.addImage(gameOverImage);
        sword.x=200;
        sword.y=200;
      }
    }
  }
  
  drawSprites()
  text("Score : "+ score,width-80,30);
  
}

function fruits() {
  if (World.frameCount%80===0){
    fruit=createSprite(width-40,height-20,20,20)
  fruit.scale=0.2
  //fruit.debug=true
  r=Math.round(random(1,4))
  if ( r == 1) {
    fruit.addImage(fruit1)
  } else if ( r == 2 ) {
    fruit.addImage(fruit2)
  } else if ( r == 3 ) {
    fruit.addImage(fruit3)
  } else if ( r == 4 ) {
    fruit.addImage(fruit4)
  }
    
  fruit.y=Math.round(random(50,340))
  
  fruit.velocityX=-7
  fruit.setlifetime=100 
  
  fruitGroup.add(fruit)
 }

}

function Enemy () {
  if (World.frameCount%200===0) {
    monster=createSprite(width-40,height-20,20,20)
    monster.addAnimation("moving", monsterimage )
    monster.y=Math.round(random(100,300))
    monster.velocityX=-8
    monster.setlifetime=50
    
    enemyGroup.add(monster)
  }
  
}





