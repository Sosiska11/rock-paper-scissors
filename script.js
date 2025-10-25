let defaultAnswer = Math.floor(Math.random() * 3); 
let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice())

console.log(playRound())


function randomDefault(){
    if (defaultAnswer == 0){
        defaultAnswer = "Rock"
    } else if (defaultAnswer == 1){
        defaultAnswer = 'Paper'
    } else {
        defaultAnswer = 'Scissors'
    }

    return defaultAnswer
};

function getComputerChoice(){
   let computerResult = Math.floor(Math.random() * 3);
   return computerResult;
}

function getHumanChoice(){
    let humanResult =  window.prompt("rock paper scissors", randomDefault());
    return humanResult.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice === 'rock' && computerChoice === 0) || (humanChoice === 'paper' && computerChoice === 1) || (humanChoice === 'scissors' && computerChoice === 2) ){
        alert('Draw');
    } else if ((humanChoice === 'paper' && computerChoice === 0) || (humanChoice === 'rock' && computerChoice === 2) || (humanChoice === 'scissors' && computerChoice === 1)) {
        alert('You Win!')
        return humanScore + 1;
    } else {
        alert('You lose!')
        return computerScore + 1
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



