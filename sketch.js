var track
var boy


function preload(){
  //pre-load images
trackImage = loadImage("path.png");
boyImage = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,0,400,400);
  track.addImage("track", trackImage);
track.velocityY=-4;
track.scale=1.5;

boy = createSprite(200,250,20,20)
boy.addAnimation("boy",boyImage)
boy.velocityY=0
boy.scale=0.07
}




function draw() {
  background("gray");
  

  drawSprites()



  if (keyWentDown(RIGHT_ARROW)) {
    boy.x=boy.x+3  }

  if (keyWentDown(LEFT_ARROW)){
    boy.x=boy.x-3
  }

  
  if (track.y < 0){
    track.y = track.height/2;



 
 
 
 
 

}
}
