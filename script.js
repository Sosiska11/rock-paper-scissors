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
            humanScore += 1
            return humanScore;
        } else {
            alert('Bot wins')
            computerScore += 1
            return computerScore;
        }
    };

    function playGame(){
        playRound(getHumanChoice(), getComputerChoice());

        playRound(getHumanChoice(), getComputerChoice());

        playRound(getHumanChoice(), getComputerChoice());

        playRound(getHumanChoice(), getComputerChoice());

        playRound(getHumanChoice(), getComputerChoice());

        if (humanScore > computerScore){
            alert('YOU ARE THE WINNER!!!!!!')
        } else if (humanScore < computerScore){
            alert('you\'re loser man.')
        } else {
            alert("ITS DRAAAAW")
        }
        
        alert("Game over!!!!!")
    }

    playGame()

    console.log(humanScore, computerScore);
    



