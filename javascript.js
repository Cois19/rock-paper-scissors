// return computer's choice
function computerPlay() {
    let random = Math.floor((Math.random() * 3) + 1);
    let play;

    if (random === 1) {
        play = 'Rock';
    } else if (random === 2) {
        play = 'Paper';
    } else {
        play = 'Scissor';
    }

    return play;
}

// play a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let result;

    if (playerSelection === 'ROCK') {
        switch (computerSelection) {
            case 'Rock':
                result = 'Draw!';
                break;
            case 'Paper':
                result = 'Player Lose!';
                break;
            case 'Scissor':
                result = 'Player Win!';
                break;
        }
    }

    if (playerSelection === 'PAPER') {
        switch (computerSelection) {
            case 'Rock':
                result = 'Player Win!';
                break;
            case 'Paper':
                result = 'Draw!';
                break;
            case 'Scissor':
                result = 'Player Lose!';
                break;
        }
    }

    if (playerSelection === 'SCISSOR') {
        switch (computerSelection) {
            case 'Rock':
                result = 'Player Lose!';
                break;
            case 'Paper':
                result = 'Player Win!';
                break;
            case 'Scissor':
                result = 'Draw!';
                break;
        }
    }

    return result;
}

// play 5 rounds
function game() {
    // let playerSelection;
    // let computerSelection;
    // let round_result;

    const rock_btn = document.querySelector('#rock-btn');
    const paper_btn = document.querySelector('#paper-btn');
    const scissor_btn = document.querySelector('#scissor-btn');

    rock_btn.addEventListener('click', rockButton);
    paper_btn.addEventListener('click', paperButton);
    scissor_btn.addEventListener('click', scissorButton);

    function rockButton() {
        let playerSelection = 'rock';
        let computerSelection = computerPlay();
        let value = playRound(playerSelection, computerSelection);
        scoring(value);
    }

    function paperButton() {
        let playerSelection = 'paper';
        let computerSelection = computerPlay();
        let value = playRound(playerSelection, computerSelection);
        scoring(value);
    }

    function scissorButton() {
        let playerSelection = 'scissor';
        let computerSelection = computerPlay();
        let value = playRound(playerSelection, computerSelection);
        scoring(value);
    }
}

function scoring(value) {
    let playerScore = 0;
    let computerScore = 0;

    let player_score = document.querySelector('#player_score');
    let computer_score = document.querySelector('#computer_score');
    const final_result = document.querySelector('#final_result');

    if (value === 'Player Win!') {
        playerScore++;
    } else if (value === 'Player Lose!') {
        computerScore++;
    }

    player_score.textContent = playerScore;
    computer_score.textContent = computerScore;

    if (playerScore > computerScore) {
        final_result.textContent = 'You win the game!';
    } else if (playerScore < computerScore) {
        final_result.textContent = 'Computer wins the game!';
    } else {
        final_result.textContent = 'It\'s a tie!';
    }

}

game();