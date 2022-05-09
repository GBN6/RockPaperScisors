
let playerScore = 0;
let compScore = 0;

const playerChoiceBtn = document.querySelectorAll('.pickSelection');
const divResult = document.querySelector('.resultOutput');
const resultParagraph = document.querySelector('.resultText');
const paraScore = document.querySelector('.resultScore');
const newGameButton = document.createElement('button');
newGameButton.classList.add('newGame', 'btnH');
newGameButton.textContent = 'Play Again!'

const rockSelected = document.querySelector('#RockP');
const paperSelected = document.querySelector('#PaperP');
const scissorsSelected = document.querySelector('#ScissorsP');

const rockSelectedComp = document.querySelector('#RockC');
const paperSelectedComp = document.querySelector('#PaperC');
const scissorsSelectedComp = document.querySelector('#ScissorsC');

// function to get player choice from button clicks
function getPlayerChoice(e) 
{
    playerChoice = e.target.textContent.toLowerCase();
    console.log(playerChoice);
    if (playerChoice === 'rock') 
    {
        rockSelected.style.backgroundColor = '#DA0037';
        paperSelected.style.backgroundColor = 'white'
        scissorsSelected.style.backgroundColor = 'white'
    }
    else if (playerChoice === 'paper')
    {
        rockSelected.style.backgroundColor = 'white';
        paperSelected.style.backgroundColor = '#DA0037'
        scissorsSelected.style.backgroundColor = 'white'
    }
    else if (playerChoice === 'scissors')
    {
        rockSelected.style.backgroundColor = 'white';
        paperSelected.style.backgroundColor = 'white'
        scissorsSelected.style.backgroundColor = '#DA0037'
    }
    playRound(computerPlay(), playerChoice);
}


// function to roll computer choice
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) 
    {
        rockSelectedComp.style.backgroundColor = '#ecca04';
        paperSelectedComp.style.backgroundColor = 'white'
        scissorsSelectedComp.style.backgroundColor = 'white'
        return 'rock';
    }
    else if (computerChoice === 2) 
    {
        rockSelectedComp.style.backgroundColor = 'white';
        paperSelectedComp.style.backgroundColor = '#ecca04'
        scissorsSelectedComp.style.backgroundColor = 'white'
        return 'paper';
    }
    else 
    {
        rockSelectedComp.style.backgroundColor = 'white';
        paperSelectedComp.style.backgroundColor = 'white'
        scissorsSelectedComp.style.backgroundColor = '#ecca04'
        return 'scissors';
    } 
}

// function to play one round 
function playRound(computerChoice, playerChoice) {
    // computerChoice = computerPlay();
    // playerChoice = playerSelection();
    console.log(computerChoice);
    console.log(playerChoice);
    
    // check if tie
    if (computerChoice === playerChoice ) 
    {
        playerScore++;
        compScore++;
        resultParagraph.textContent = `It's a tie! Both players gain point!`;
        paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;
    }
    // rock beats scissors
    else if (playerChoice === 'rock') 
    {
        if (computerChoice === 'scissors')
        {
            playerScore++;
            resultParagraph.textContent = `You won! Plus one point for player`;
            paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;
        }
        else 
        {
            compScore++;
            resultParagraph.textContent = `You lost! Plus one point for computer`;
            paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;
        }        
    }
    // paper beats rock
    else if (playerChoice === 'paper') 
    {
        if (computerChoice === 'rock')
        {
            playerScore++;
            resultParagraph.textContent = `You won! Plus one point for player`;
            paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;
        }
        else 
        {
            compScore++;
            resultParagraph.textContent = `You lost! Plus one point for computer`;
            paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;
        }
        
    }
    // scissors beats paper
    else if (playerChoice === 'scissors') 
    {
        if (computerChoice === 'paper')
        {
            playerScore++;
            resultParagraph.textContent = `You won! Plus one point for player`;
            paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;    
        }
        else 
        {
            compScore++;
            resultParagraph.textContent = `You lost! Plus one point for computer`;
            paraScore.textContent = `Player Score: ${playerScore}, Computer Score: ${compScore}`;
        }
    }
    divResult.appendChild(paraScore);
}

// function to play until someone reaches 5 points
function game() {

    if (playerScore === 5 && compScore === 5)
    {
        playerChoiceBtn.forEach(button => button.removeEventListener('click', getPlayerChoice));
        playerChoiceBtn.forEach(button => button.removeEventListener('click', game));
        resultParagraph.textContent = `It's a TIE! Please play again.`;
        resultParagraph.style.cssText = ('font-size: 30px; color: orange');
        divResult.removeChild(paraScore);
        divResult.appendChild(newGameButton);
    }  
    else if (playerScore === 5) {
        playerChoiceBtn.forEach(button => button.removeEventListener('click', getPlayerChoice));
        playerChoiceBtn.forEach(button => button.removeEventListener('click', game));
        resultParagraph.textContent = `Congratulations you WON!`;
        resultParagraph.style.cssText = ('font-size: 30px; color: green');
        divResult.removeChild(paraScore);
        divResult.appendChild(newGameButton);


    }
    else if (compScore === 5) {
        playerChoiceBtn.forEach(button => button.removeEventListener('click', getPlayerChoice));
        playerChoiceBtn.forEach(button => button.removeEventListener('click', game));
        resultParagraph.textContent = `The computer has beaten you!`;
        resultParagraph.style.cssText = ('font-size: 30px; color: red')
        divResult.removeChild(paraScore);
        divResult.appendChild(newGameButton);
    }

}
newGameButton.addEventListener('click', () => location.reload());
playerChoiceBtn.forEach(button => button.addEventListener('click', getPlayerChoice));
playerChoiceBtn.forEach(gameButton => gameButton.addEventListener('click', game));
// playerChoiceBtn.forEach(computerTransform => computerTransform.addEventListener('click', computerChange));
