class Game{

    constructor(){
        this.message = createElement('h2')
        this.plyscr1 = createElement('h3')
        this.plyscr2 = createElement('h3')
        this.line1 = createElement('h2')
        this.line2 = createElement('h3')
    }

    start(){
     /*   form = new Form()
        form.display()
        player = new Player()*/

        player1 = createSprite(width/2-440,height/2+30,50,50)
        player1.addAnimation('still',player1Img);
        player1.scale = 0.5
        player1.addAnimation('kick',rplayer)

        player2 = createSprite(width/2+440,height/2+30,50,50);
        player2.addImage(player2Img)
        player2.scale = 0.5
        player2.addAnimation('shot',bplayer)

        goal1 = createSprite(width/2-550,height/2,50,50)
        goal1.addImage(goal1Img)
        goal1.scale = 0.4
        goal1.debug = true;
        goal1.setCollider('rectangle',0,0,160,380)

        goal2 = createSprite(width/2+550,height/2,50,50)
        goal2.addImage(goal2Img)
        goal2.scale = 0.4

        ball = createSprite(width/2,height/2,50,50)
        ball.addImage(ballImg)
        ball.scale = 0.05
        

        this.message.position(width/2-150,height/2-120)
        this.message.class('greeting');

        this.plyscr1.position(width/2-530,height/2-280)
        this.plyscr1.class('score')

        this.plyscr2.position(width/2+470,height/2-280)
        this.plyscr2.class('score')

        this.line1.position(width/2-150,height/2-120)
        this.line1.class('greeting');

        this.line2.position(width/2-150,height/2-80)
        this.line2.class('greeting');


       
    }


    serve(){


      ball.velocityX = 10;
      ball.velocityY = 3;

    }

    reset(){

      ball.x =width/2
      ball.y = height/2
      ball.velocityX = 0
      ball.velocityY = 0


    }

    play(){
        
        //place info text in the center
  if (gameState === "serve") {
    this.message.html ('Press space to start')
    this.line1.html('')
    this.line2.html('')
  }

  this.plyscr1.html ('SCORE : '+rscore)
  this.plyscr2.html ('SCORE : '+bscore)
  


  var edges = createEdgeSprites();

  ball.bounceOff(edges);
  player1.bounceOff(edges);
  player2.bounceOff(edges);
  // score
  
  

  //movement of player1

  if(keyDown(RIGHT_ARROW)){
    player1.x = player1.x + 7
  }

  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x - 7
  }

  if(keyDown(UP_ARROW)){
    player1.y = player1.y - 7
  }
  
  if(keyDown(DOWN_ARROW)){
    player1.y = player1.y + 7
  }
  

  //movement of player2

  if(keyDown("b")){
    player2.x = player2.x + 7
  }

  if(keyDown("f")){
    player2.x = player2.x - 7
  }

  if(keyDown("u")){
    player2.y = player2.y - 7
  }
  
  if(keyDown("d")){
    player2.y = player2.y + 7
  }
  
 
  //serving the ball

  if(keyDown("space") && gameState === 'serve'){


    this.serve();
    gameState = 'play'
    this.message.html('')


  }
  
  if(ball.isTouching(goal1)||ball.isTouching(goal2)){

    if(ball.isTouching(goal1)){
      bscore = bscore+1
    }

    if(ball.isTouching(goal2)){
      rscore = rscore+1
    }


    this.reset()

    gameState = 'serve'

  }
  

  if(bscore === 5 || rscore === 5){

    gameState = 'end'
    this.line1.html ('GAME OVER !!!')
    this.line2.html("PRESS 'R' TO RESTART")

  }
 
  if(keyDown("r")&& gameState === 'end'){

    gameState = 'serve'
    bscore = 0
    rscore = 0
  
    this.line1.html('')
    this.line2.html('')

  }
  

  if(keyWentDown("k")){

    console.log('its working')
    player1.changeAnimation('kick')
    ball.velocityX = 23;


  }


  if(keyWentUp("k")){

    console.log('*************************')
    player1.changeAnimation("still")
  
  }

  if(keyDown("l")){

    console.log('its working')
    player2.changeAnimation('shot')
    ball.velocityX = -23;


  }

  

  //score

  
  

  
    }

    







}