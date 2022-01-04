var player,game,form;
var bgImg;
var database;
var playerCount,gameState;
var allplayers;
var player1,player2,ball,goal1,goal2;
var player1Img,player2Img,ballImg,goal1Img,goal2Img
var gameState = 'serve';
var rplayer,bplayer
var rscore=0 ,bscore=0


function preload(){
  bgImg = loadImage("Images/field.png")
  player1Img = loadAnimation("Images/player.png")
  rplayer = loadAnimation('Images/pshot.png')
  player2Img = loadImage("Images/computer.png")
  bplayer = loadAnimation("Images/cshot.png")
  ballImg = loadImage("Images/football.png")
  goal1Img = loadImage("Images/goal1.png")
  goal2Img = loadImage("Images/goal2.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 // database = firebase.database()

  game = new Game()
  game.start()
}

function draw() {
  background(bgImg);  

  game.play();
  drawSprites();
}

function windowResized(){

resizeCanvas(windowWidth,windowHeight)

}
