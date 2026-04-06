    let humanScore = 0;
    let computerScore = 0;
    let gameActive = true; 

    //Random number to word
    function numbersToWords(number){
        switch (number) {
            case 0: 
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
            default:
                return undefined;
        }
    };

    let divResults = document.createElement('div');
    let body = document.querySelector('body');

    body.appendChild(divResults);

    function playRound(humanChoice){

        if (!gameActive) return;

        let computerChoice = numbersToWords(Math.floor(Math.random() * 3));
        console.log(computerChoice)

        if (humanChoice == computerChoice) {
            alert('Draw');
        } else if ((humanChoice == 'scissors' && computerChoice == 'paper') || 
            (humanChoice == 'rock' && computerChoice == 'scissors') || 
            (humanChoice == 'paper' && computerChoice == 'rock'))
        {
            alert('You win');
            humanScore += 1
        } else {
            alert('Bot wins')
            computerScore += 1
        }

        updateScoreDisplay();

        game();
    };



    let rock = document.getElementById('rock');
    rock.addEventListener('click', () => {
        playRound('rock');
        console.log(humanScore);
    });


    let paper = document.getElementById('paper');
    paper.addEventListener('click', () => {
        playRound('paper');
        console.log(humanScore, computerScore);
    });


    let scissors = document.getElementById('scissors');
    scissors.addEventListener('click', () => {
        playRound('scissors');
        console.log(humanScore, computerScore);
    });
    
    function updateScoreDisplay() {
        divResults.textContent = `Score: Player ${humanScore} - ${computerScore} Bot`;
    }
    
    function game(){
        if (humanScore == 5 ){
            alert('game over. you win')
            gameActive = false;
        } else if(computerScore == 5){
            alert('game over. you lose')
            gameActive = false;
        }
    }
