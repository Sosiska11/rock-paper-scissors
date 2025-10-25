let defaultAnswer = Math.floor(Math.random() * 3); 
let humanScore = 0;
let computerScore = 0;

console.log("bot has: " + getComputerChoice())

function getComputerChoice(){
   let computerResult = Math.floor(Math.random() * 3);
   return numbersToWords(computerResult);
}

function numbersToWords(number){
    if (number == 0){
        number = 'rock'
    } else if (number == 1){
        number = 'paper'
    } else {
        number = 'scissors'
    }
    return number;
};

function getHumanChoice(){
    let humanResult =  window.prompt("rock paper scissors", numbersToWords(defaultAnswer));
    return humanResult.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        alert('Draw');
    } else if ((humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock')){
        alert('You win');
        return humanScore + 1;
    } else if ((humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'paper')) {
        alert('Bot wins')
        return computerScore + 1
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



