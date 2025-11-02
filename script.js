    let defaultAnswer = Math.floor(Math.random() * 3); 
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(){
    let computerResult = Math.floor(Math.random() * 3);
    return numbersToWords(computerResult);
    }

    function numbersToWords(number){
        switch (number) {
            case 0: 
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
            default:
                undefined;
        }
    };

    function getHumanChoice(){
        let humanResult =  window.prompt("rock paper scissors", numbersToWords(defaultAnswer));
        return humanResult.toLowerCase();
    }

    function playRound(humanChoice, computerChoice){

        if (humanChoice == computerChoice) {
            alert('Draw');
        } else if ((humanChoice == 'scissors' && computerChoice == 'paper') || 
            (humanChoice == 'rock' && computerChoice == 'scissors') || 
            (humanChoice == 'paper' && computerChoice == 'rock'))
        {
            alert('You win');
            return humanScore + 1;
        } else {
            alert('Bot wins')
            return computerScore + 1;
        }
    };

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    console.log(humanScore, computerScore);
    



