class Player{


constructor(){
    this.name = null
    this.index = 0
    this.score = 0
}

addPlayer(){

    var playerIndex = "players/player"+ this.index
    database.ref(playerIndex).set({
        name : this.name,
        score : this.score
    })

}


getCount(){

  var countref = database.ref("playerCount")
  countref.on('value',data =>{
        playerCount = data.val()
    })

}

updateCount(count){

 database.ref("/").update({
    playerCount : count
})

}

getPlayerInfo(){

    database.ref("players").on('value',data =>{

        allplayers = data.val
        
    })

}

}