
let playerScore = 0;
let compScore = 0;

const btnsScissors = document.querySelector('.Scissors');
const btnsRock = document.querySelector('.Rock');
const btnsPaper = document.querySelector('.Paper');
const playerChoiceBtn = document.querySelectorAll('.pickSelection');


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


function playRound(computerChoice, playerChoice) {
    // computerChoice = computerPlay();
    // playerChoice = playerSelection();
    console.log(computerChoice);
    console.log(playerChoice);
    
    // check if tie
    const resultParagraph = document.querySelector('p');
    if (computerChoice === playerChoice ) 
    {
        playerScore++;
        compScore++;
        resultParagraph.textContent = `It's a tie! Both players gain point!`;
    }
    // rock beats scissors
    else if (playerChoice === 'rock') 
    {
        if (computerChoice === 'scissors')
        {
            playerScore++;
            resultParagraph.textContent = `You won! Plus one point for player`;
        }
        else 
        {
            compScore++;
            resultParagraph.textContent = `You lost! Plus one point for computer`;
        }        
    }
    // paper beats rock
    else if (playerChoice === 'paper') 
    {
        if (computerChoice === 'rock')
        {
            playerScore++;
            resultParagraph.textContent = `You won! Plus one point for player`;
        }
        else 
        {
            compScore++;
            resultParagraph.textContent = `You lost! Plus one point for computer`;
        }
        
    }
    // scissors beats paper
    else if (playerChoice === 'scissors') 
    {
        if (computerChoice === 'paper')
        {
            playerScore++;
            resultParagraph.textContent = `You won! Plus one point for player`;
        }
        else 
        {
            compScore++;
            resultParagraph.textContent = `You lost! Plus one point for computer`;
        }
    }
}

// function game() {

//     for (i = 0; i < 5; i++) {
//         result = playRound(computerPlay(), playerSelection());
//         console.log(result);
//         console.log(`After round number ${i + 1}, score is ${playerScore} for player and ${compScore} for computer`);
//     }
//     if (playerScore > compScore) {
//         console.log(`Congratulations! You won ${playerScore} to ${compScore}.\nThanks for playing!`);
//     }
//     else if (playerScore = compScore) {
//         console.log(`OMG! It's a draw ${playerScore} to ${compScore}.\nThanks for playing! `);
//     }
//     else {
//         console.log(`Im so sorry, but you lost ${compScore} to ${playerScore}.\nThanks for playing!`);
//     }
    
    
// }
//  game();


btnsRock.addEventListener('click', () => playRound(computerPlay(), 'rock'));

btnsPaper.addEventListener('click',  () => playRound(computerPlay(), 'paper'));

btnsScissors.addEventListener('click',  () => playRound(computerPlay(), 'scissors'));