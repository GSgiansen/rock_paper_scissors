function computerPlay(){
    let a= Math.floor(Math.random()*2)
    const lst=["rock","paper","scissors"]
    return lst[a]
}

function playRound(player,computerPlay){
    player=lowercase(player)
    if (player=="rock"){
        if (computerPlay=="paper") return ("You Lose! "+ capitalize(computerPlay) +" beats "+capitalize(player))
        else if (computerPlay=="scissors") return ("You Win! "+capitalize(player) +" beats "+capitalize(computerPlay))
        else return ("Its a tie!!")
    }    
    else if (player=="paper"){
        if (computerPlay=="scissors") return ("You Lose! "+capitalize(computerPlay) +" beats "+capitalize(player))
        else if (computerPlay=="rock") return ("You Win! "+capitalize(player) +" beats "+capitalize(computerPlay))
        else return ("Its a tie!!")
    }
    else if (player=="scissors"){
        if (computerPlay=="rock") return ("You Lose! "+capitalize(computerPlay) +" beats "+capitalize(player))
        else if (computerPlay=="paper") return ("You Win! "+capitalize(player) +" beats "+capitalize(computerPlay))
        else return ("Its a tie!!")
    }
}

function game(){
    let comp=0
    let play=0
    for (let i=0;i<5;i++){
        let p=(prompt("Rock, Paper or Scissors?"))
        let ans=playRound(p,computerPlay())
        if (ans[4]=="L") comp+=1
        else if (ans[4]=="W") play+=1
        console.log(ans)
        console.log(comp)
        console.log(play)
    }
    if (play>comp) return "You Won with "+String(play)+" points"
    else if (play<comp) return 'Computer Won with '+String(comp)+" points"
    else return "Its a major tie!!!!"
    }

console.log(game())

function lowercase(word){
    let s=""
    for (let i=0;i<word.length;i++){
        s+=word[i].toLowerCase()
    }
    return s
}
//console.log(lowercase('LOWERS'))

function capitalize(str){
    s=str[0].toUpperCase()
    s+=str.slice(1)

    return s
  }