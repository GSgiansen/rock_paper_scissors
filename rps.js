function computerPlay(){
    let a= Math.floor(Math.random()*2)
    const lst=["rock","paper","scissors"]
    return lst[a]
}

function playRound(player,computerPlays){
    console.log(player,computerPlays)
    player=lowercase(player)
    if (player=="rock"){
        if (computerPlays=="paper"){ printtext.innerHTML=("You Lose! "+ capitalize(computerPlays) +" beats "+capitalize(player))
        computerScoreint+=1
        computerScore.innerHTML=computerScoreint
    }
        else if (computerPlays=="scissors"){ printtext.innerHTML=("You Win! "+capitalize(player) +" beats "+capitalize(computerPlays))
        playerScoreint+=1
        playerScore.innerHTML=playerScoreint
}

        else printtext.innerHTML=("Its a tie!!")
    }    
    else if (player=="paper"){
        if (computerPlays=="scissors") {printtext.innerHTML=("You Lose! "+capitalize(computerPlays) +" beats "+capitalize(player))
        computerScoreint+=1
        computerScore.innerHTML=computerScoreint
    }
        else if (computerPlays=="rock") {printtext.innerHTML=("You Win! "+capitalize(player) +" beats "+capitalize(computerPlays))
        playerScoreint+=1
        playerScore.innerHTML=playerScoreint
}
        else printtext.innerHTML=("Its a tie!!")
    }
    else if (player=="scissors"){
        if (computerPlays=="rock") {printtext.innerHTML=("You Lose! "+capitalize(computerPlays) +" beats "+capitalize(player))
        computerScoreint+=1
        computerScore.innerHTML=computerScoreint
    }
    
        else if (computerPlays=="paper") {printtext.innerHTML=("You Win! "+capitalize(player) +" beats "+capitalize(computerPlays))
        playerScoreint+=1
        playerScore.innerHTML=playerScoreint
}
        else printtext.innerHTML=("Its a tie!!")
    }
    if (computerScoreint>=5) printtext.innerHTML=("Computer Wins overall!")
    else if (playerScoreint>=5) printtext.innerHTML=("Player Wins overall!")
}

/*function game(){
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

game()
*/

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



const results =document.querySelector("#results");
const container = document.querySelector('#container');
const rock =document.createElement("button")
const paper =document.createElement("button")
const scissors =document.createElement("button")

rock.classList.add("rock")
rock.textContent="Rock!"
rock.value="rock"
rock.onclick=function() {playRound(rock.value,computerPlay())}
container.appendChild(rock)

paper.classList.add("paper")
paper.textContent="Paper!"
paper.value="paper"
paper.onclick=function() {playRound(paper.value,computerPlay())}


scissors.classList.add("scissors")
scissors.textContent="Scissors!"
scissors.value="scissors"
scissors.onclick=function() {playRound(scissors.value,computerPlay())}
container.appendChild(scissors)
container.appendChild(paper)

let playerScoreint=0
let computerScoreint=0


const printtext=document.createElement("div")
const smol1=document.createElement("div")
const playerScore= document.createElement("div")
const smol2=document.createElement("div")
const computerScore=document.createElement("div")

smol1.textContent="Player's score:"

smol2.textContent="Computer's score:"


playerScore.textContent="0"
computerScore.textContent="0"
results.append(smol1)
results.append(playerScore)
results.append(smol2)
results.append(computerScore)
results.append(printtext)