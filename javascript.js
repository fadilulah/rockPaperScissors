function getComputerChoice(){
    let computerChoice = [`rock`,`paper`,`scissors`]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}
function getHumanChoice(){
    let humanChoice = prompt(`enter your selection`)
    let humanChoiceToLower = humanChoice.toLowerCase()
    return humanChoiceToLower
}
let human = `human wins you `
let computer = `computer wins`
let draw = `it's a draw you and the computer entered the same value`
let invalid = `please enter a valid selection`

function playRound(computerSelection,humanSelection){
    
   if (humanSelection === computerSelection){
    return draw
   }
   else if (humanSelection === `rock` && computerSelection===`scissors`){
    return human
   }
   else if (humanSelection === `rock` && computerSelection===`paper`){
    return computer
   }
   else if (humanSelection === `paper` && computerSelection===`scissors`){
    return computer
   }
   else if (humanSelection === `paper` && computerSelection===`rock`){
    return human
   }
   else if (humanSelection === `scissors` && computerSelection===`rock`){
    return computer
   }
   else if (humanSelection === `scissors` && computerSelection===`paper`){
    return human
   }
   else if (humanSelection === ``){
    return invalid
   }
   else{
    return invalid
   }
}

function game(){
    let humanCounter = 0
    let computerCounter =0
    var arr = []
    for (let i = 0; i < 5; i++) {
        let roundOne=playRound(getComputerChoice(),getHumanChoice())
        if (roundOne===human){
            humanCounter++
        }
        else if(roundOne===computer){
            computerCounter++
        }
        arr.push(roundOne);
    }
    return [arr,computerCounter,humanCounter]

}
console.log(game())