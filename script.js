const playerScoreValue = document.querySelector(".player-score-value");
const botScoreValue = document.querySelector(".bot-score-value");

const vs = document.querySelector(".vs");
const result = document.querySelector(".result");

const playerImage = document.querySelector(".player-image-container");
const botImage = document.querySelector(".bot-image-container");

const buttonContainer = document.querySelector(".buttons");

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


    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        botScore++;
    }

    updateScores();
    updateImage(playerImage, playerChoice);
    updateImage(botImage, botChoice);

    if (playerScore === 5 || botScore === 5) {
        gameOver();
        return;
    }

    result.textContent = roundResult;
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

function updateImage(image, choice) {
    if (choice === "rock") {
        if (image.className === "bot-image-container") {
            image.setAttribute("src", "./images/mirrorRock.png");
        } else {
            image.setAttribute("src", "./images/rock.png");
        }
        image.setAttribute("alt", "A rock shaped hand.");
    } 
    if (choice === "paper") {
        if (image.className === "bot-image-container") {
            image.setAttribute("src", "./images/mirrorPaper.png");
        } else {
            image.setAttribute("src", "./images/paper.png");
        }
        image.setAttribute("alt", "A paper shaped hand.");
    }
    if (choice === "scissors") {
        if (image.className === "bot-image-container") {
            image.setAttribute("src", "./images/mirrorScissors.png");
        } else {
            image.setAttribute("src", "./images/scissors.png");
        }
        image.setAttribute("alt", "A scissor shaped hand");
    }
}

function gameOver() {
    vs.textContent = "Game Over";

    if (playerScore === 5) {
        result.textContent = "You won the game!";
    } else if (botScore === 5) {
        result.textContent = "The bot won the game";
    }

    buttons.forEach(button => {
        button.style.display = "none";
    });

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
        resetButton.remove();
        resetGame();
    });

    buttonContainer.appendChild(resetButton);
}

function resetGame() {
    playerScore = 0;
    botScore = 0;

    playerScoreValue.textContent = 0;
    botScoreValue.textContent = 0;

    playerImage.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=");
    botImage.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=");
    playerImage.setAttribute("alt", "");
    botImage.setAttribute("alt", "");

    vs.textContent = "VS";
    result.textContent = "Choose from one of three buttons below!";

    buttons.forEach(button => {
        button.style.display = "block";
    });
}
