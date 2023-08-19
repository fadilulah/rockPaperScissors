function getComputerChoice(){
    let computerChoice = [`rock`,`paper`,`scissors`]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}
//function getHumanChoice(){
    //let humanChoice = prompt(`enter your selection`)
    //let humanChoiceToLower = humanChoice.toLowerCase()
    //return humanChoiceToLower
//}
let human = `The Human Has Won this round `
let computer = `The Computer Has Won This Round `
let draw = `It's a draw you and the computer entered the same value`
let invalid = `please enter a valid selection`

// declare a variable fir the human and computer counter and set it to zero  
let humansCounter = document.querySelector(`.human-count`)
let humanCounter = 0
let computersCounter = document.querySelector(`.computer-count`)
let computerCounter =0

// create a div container to hold the value of the round
let roundWinner= document.querySelector(`.roundwinner`)

let finalWinner = document.querySelector(`.final-winner`)

let playAgain = document.querySelector(`.play`)

// create a function that gets the computer selection and human selection and also updates the scores
function playRound(computerSelection,humanSelection){
    
   if (humanSelection === computerSelection){
    return draw
   }
   else if (humanSelection === `rock` && computerSelection===`scissors`){
    humanCounter +=1
    return human
   }
   else if (humanSelection === `rock` && computerSelection===`paper`){
    computerCounter+=1
    return computer
   }
   else if (humanSelection === `paper` && computerSelection===`scissors`){
    computerCounter+=1
    return computer
   }
   else if (humanSelection === `paper` && computerSelection===`rock`){
    humanCounter +=1
    return human
   }
   else if (humanSelection === `scissors` && computerSelection===`rock`){
    computerCounter+=1
    return computer
   }
   else if (humanSelection === `scissors` && computerSelection===`paper`){
    humanCounter +=1
    return human
   }
   else if (humanSelection === ``){
    return invalid
   }
   else{
    return invalid
   }
}


let rock = document.querySelector(`.rock`).addEventListener(`click`,()=>{roundWinner.textContent =(playRound(getComputerChoice(),`rock`))
humansCounter.textContent=humanCounter
computersCounter.textContent=computerCounter
console.log(humanCounter)
console.log(computerCounter)
playAgain.style.display=`none`


if (humanCounter===5 && computerCounter<5){
    finalWinner.textContent=`Congratulations Warrior You have Saved The Human Race You Live To See Another Day`
    roundWinner.textContent=``
    humanCounter=0
    computerCounter=0
    playAgain.textContent= `play again`
    playAgain.style.display=`block`
}

else if(humanCounter<5 && computerCounter===5){
    finalWinner.textContent=`You Lost Prepare For The Eradication of The Human-Race`
    roundWinner.textContent=``
    humanCounter=0
    computerCounter=0
    playAgain.textContent= `play again`
    playAgain.style.display=`block`
}

})


let paper = document.querySelector(`.paper`).addEventListener(`click`,()=>{roundWinner.textContent =(playRound(getComputerChoice(),`paper`))
humansCounter.textContent=humanCounter
computersCounter.textContent=computerCounter
console.log(humanCounter)
console.log(computerCounter)
playAgain.style.display=`none`

let finalWinner = document.querySelector(`.final-winner`)
if (humanCounter===5 && computerCounter<5){
    finalWinner.textContent=`Congratulations Warrior You have Saved The Human Race You Live To See Another Day`
    roundWinner.textContent=``
    humanCounter=0
    computerCounter=0
    playAgain.textContent= `play again`
    playAgain.style.display=`block`
}

else if(humanCounter<5 && computerCounter===5){
    finalWinner.textContent=`You Lost Prepare For The Eradication of The Human-Race`
    roundWinner.textContent=``
    humanCounter=0
    computerCounter=0
    playAgain.textContent= `play again`
    playAgain.style.display=`block`
}

})
let scissors = document.querySelector(`.scissors`).addEventListener(`click`,()=>{roundWinner.textContent =(playRound(getComputerChoice(),`scissors`))
humansCounter.textContent=humanCounter
computersCounter.textContent=computerCounter
console.log(humanCounter)
console.log(computerCounter)
playAgain.style.display=`none`

if (humanCounter===5 && computerCounter<5){
    finalWinner.textContent=`Congratulations Warrior You have Saved The Human Race You Live To See Another Day`
    roundWinner.textContent=``
    humanCounter=0
    computerCounter=0
    playAgain.textContent= `play again`
    playAgain.style.display=`block`
}

else if(humanCounter<5 && computerCounter===5){
    finalWinner.textContent=`You Lost Prepare For The Eradication of The Human-Race`
    roundWinner.textContent=``
    humanCounter=0
    computerCounter=0
    playAgain.textContent= `play again`
    playAgain.style.display=`block`
}

})

playAgain.addEventListener(`click`,()=>{
    humansCounter.textContent=0
    computersCounter.textContent=0
    roundWinner.textContent=``
    finalWinner.textContent=``
    playAgain.textContent=``
})