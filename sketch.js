var track,path, runner,running, b1, b2;

function preload(){
//pre-load images
running=loadAnimation("Runner-1.png","Runner-2.png");
path=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //track
  track=createSprite(200,200,400,200);
  track.addImage(path);
  track.y=height/2;
  track.velocityY=-4;
  track.scale=1.2;
  //runner
  runner=createSprite(200,330,40,40);
  runner.addAnimation(running);
  runner.scale=1.0;
  //wall
  b1=createSprite(40,200,10,400);
  b1.visible=false;
  b2=createSprite(360,200,10,400);
  b2.visible=false;
}

function draw() {
  background(0);

  if(track.y>400){
    track.y=height/2;
}

  runner.x= World.mouseX;

  runner.collide(b1);
  runner.collide(b2);
  drawSprites();
}
