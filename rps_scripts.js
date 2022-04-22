alert('Hi! This is a simple Rock Paper Scissors game.')
let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return 'rock';
    }
    else if (computerChoice === 2) {
        return 'paper';
    }
    else return 'scissors';
}

function playerSelection() {
    let keepGoing = true
    while (keepGoing) {
    let playerChoice = prompt('Please choose between: "Rock", "Paper" or "Scissors"', '').trim().toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
            return playerChoice;
        }
        else {
            alert('Please type only "Rock", "Paper" or "Scissors"');
        }
    }
}

function playRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice ) 
    {
        return `Draw! Computer chose ${computerChoice} and you chose ${playerChoice}`;
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper') 
    {
        playerScore++;
        return `You won! Computer chose ${computerChoice} and you beat him by choosing ${playerChoice}`;
    }
    else if (computerChoice === 'rock' && playerChoice === 'scissors') 
    {
        compScore++
        return `You lost! Computer chose ${computerChoice} and you ${playerChoice}`;
    }
    else if (computerChoice === 'paper' && playerChoice === 'rock') 
    {
        compScore++;
        return `You lost! Computer chose ${computerChoice} and you ${playerChoice}`;
    }
    else if (computerChoice === 'paper' && playerChoice === 'scissors') 
    {
        playerScore++;
        return `You won! Computer chose ${computerChoice} and you beat him by choosing ${playerChoice}`;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'rock') 
    {
        playerScore++;
        return `You won! Computer chose ${computerChoice} and you beat him by choosing ${playerChoice}`;
    }
    else if (computerChoice === 'scissors' && playerChoice === 'paper') 
    {
        compScore++;
        return `You lost! Computer chose ${computerChoice} and you ${playerChoice}`;
    }
}

function game() {

    for (i = 0; i < 5; i++) {
        result = playRound(computerPlay(), playerSelection());
        console.log(result);
        console.log(`After round number ${i + 1}, score is ${playerScore} for player and ${compScore} for computer`);
    }
    if (playerScore > compScore) {
        console.log(`Congratulations! You won ${playerScore} to ${compScore}.\nThanks for playing!`);
    }
    else if (playerScore = compScore) {
        console.log(`OMG! It's a draw ${playerScore} to ${compScore}.\nThanks for playing! `);
    }
    else {
        console.log(`Im so sorry, but you lost ${compScore} to ${playerScore}.\nThanks for playing!`);
    }
    
    
}
 game();

 alert('Please refresh if u want to play again!');