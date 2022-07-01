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
    //for (let i=0;i<5;i++){
        //let p=(prompt("Rock, Paper or Scissors?"))
        p="rock"
        let ans=playRound(p,computerPlay())
        if (ans[4]=="L") comp+=1
        else if (ans[4]=="W") play+=1

    //}
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
    st=str[0].toUpperCase()
    st+=str.slice(1)

    return st
  }
function buttonpressed(a){
    console.log(a)

}
const container = document.querySelector('#container');
const rock =document.createElement("button")
const paper =document.createElement("button")
const scissors =document.createElement("button")

rock.classList.add("rock")
rock.textContent="Rock!"
rock.value="rock"
rock.onclick=function() {buttonpressed(rock.value)}
container.appendChild(rock)

paper.classList.add("paper")
paper.textContent="Paper!"
paper.value="paper"
paper.onclick=function() {buttonpressed(paper.value)}


scissors.classList.add("scissors")
scissors.textContent="Scissors!"
scissors.value="scissors"
scissors.onclick=function() {buttonpressed(scissors.value)}
container.appendChild(scissors)
container.appendChild(paper)