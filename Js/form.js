class Form{

constructor(){

    this.input = createInput('ENTER YOUR NAME')
    this.button = createButton('PLAY')
    this.greeting = createElement('h2')
}

elementPositions(){
    
    this.input.position(width/2-110,height/2-80)
    this.button.position(width/2-90,height/2-20)
    this.greeting.position(width/2-300,height/2-100)

}

elementsStyle(){

    this.button.class('customButton');
    this.input.class("customInput");
    this.greeting.class('greeting');
}


hide(){

    this.input.hide()
    this.button.hide()
    this.greeting.hide()

}

handleButton(){
    this.button.mousePressed(() =>{
    this.button.hide()
    this.input.hide()

    var name= this.input.value()
    var message = "hello" + name
    this.greeting.html (message)

    playerCount = playerCount+1
    player.name = name
    player.index = playerCount
    player.addPlayer()
    player.updateCount()
    
    })
}


display(){

    this.elementPositions()
    this.handleButton()
    this.elementsStyle()
}

}