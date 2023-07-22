function getComputerChoice(){
    let computerChoice = [`rock`,`paper`,`scissors`]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)]
}
function getHumanChoice(){
    let humanChoice = prompt(`enter your selection`)
    let humanChoiceToLower = humanChoice.toLowerCase()
    return humanChoiceToLower
}
function playRound(computerSelection,humanSelection){
    let human = `human wins you `
    let computer = `computer wins`
   if (humanSelection === computerSelection){
    return (`it's a draw you and the computer entered the same value`)
   }
   else if (humanSelection === `rock` && computerSelection===`scissors`){
    return human + `rock beats scissors`
   }
   else if (humanSelection === `rock` && computerSelection===`paper`){
    return computer + `paper beats rock`
   }
   else if (humanSelection === `paper` && computerSelection===`scissors`){
    return computer + `scissors beats paper`
   }
   else if (humanSelection === `paper` && computerSelection===`rock`){
    return human + `paper beats rock`
   }
   else if (humanSelection === `scissors` && computerSelection===`rock`){
    return computer + `rock beats scissors`
   }
   else if (humanSelection === `scissors` && computerSelection===`paper`){
    return human + `scissors beats paper`
   }
   else{
    return (`you have entered an invalid selection`)
   }
}
console.log(playRound(getComputerChoice(),getHumanChoice()))