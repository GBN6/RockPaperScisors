alert('Hi! This is a simple Rock Paper Scissors game.')

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
    let playerChoice = prompt('Please choose between: "Rock", "Paper" or "Scissors"', '');
    
    return playerChoice;
}


console.log(playerSelection());
console.log(computerPlay());