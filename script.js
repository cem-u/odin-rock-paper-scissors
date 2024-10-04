const playerScoreValue = document.querySelector(".player-score-value");
const botScoreValue = document.querySelector(".bot-score-value");

const result = document.querySelector(".result");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", e => {
        playRound(e.target.textContent.toLowerCase(), getBotChoice());
    });
});

let playerScore = 0;
let botScore = 0;

function getBotChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    }
}

function playRound(playerChoice, botChoice) {
    let roundResult = calcResult(playerChoice, botChoice);

    //Update the result div text to reflect round result
    result.textContent = roundResult;

    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        botScore++;
    }

    updateScores();
}

function calcResult(playerChoice, botChoice) {
    if (botChoice === playerChoice) {
        return "It's a tie.";
    } else if (botChoice === "rock" && playerChoice === "scissors" || 
        botChoice === "paper" && playerChoice === "rock" || 
        botChoice === "scissors" && playerChoice === "paper") {
        return `You lose, ${botChoice} beats ${playerChoice}.`;
    } else {
        return `You win, ${playerChoice} beats ${botChoice}.`;
    }
}

function updateScores() {
    playerScoreValue.textContent = playerScore;
    botScoreValue.textContent = botScore;
}
