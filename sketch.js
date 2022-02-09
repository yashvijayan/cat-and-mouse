var bgImg
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(870,600);
  cat.addAnimation("sit",catImg1);
  cat.scale=0.2;

  mouse = createSprite(173,600);
  mouse.addAnimation("cheese",mouseImg1);
  mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    
    cat.velocityX=0;
    cat.addAnimation("last",catImg3);
    cat.changeAnimation("last");
    cat.x=300;
    cat.scale=0.2;

    mouse.addAnimation("last1",mouseImg3);
    mouse.changeAnimation("last1");
    mouse.scale=0.2;
    
    }
    

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("teasing",mouseImg2);
      mouse.changeAnimation("teasing");
      mouse.frameDelay=7;

      cat.velocityX=-5;
      cat.addAnimation("walking",catImg2);
      cat.changeAnimation("walking");
      cat.frameDelay=7;
  }


}
