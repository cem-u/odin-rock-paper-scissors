/*
    Returns a random choice for the computer: "rock", "paper", or "scissors".
*/
function getComputerChoice() {
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
/*
    Prompts the user for their choice of "rock", "paper", or "scissors". 
    Repeats until a valid choice is entered.
*/
function getHumanChoice() {
    while(true) {
        let choice = prompt("rock, paper, or scissors?").toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }

        console.log("Invalid input: you must enter rock, paper or scissors");
    }
}
/*
    Compares the human's choice with the computer's choice to determine 
    the result of the round based on the rules of Rock Paper Scissors. 
    Returns a string indicating if the human won, lost, or tied.
*/
function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "It's a tie.";
    }

    if(computerChoice === "rock" && humanChoice === "scissors" || 
        computerChoice === "paper" && humanChoice === "rock" || 
        computerChoice === "scissors" && humanChoice === "paper") {
        return `You lose, ${computerChoice} beats ${humanChoice}`;
    }

    return `You win, ${humanChoice} beats ${computerChoice}`;
}
/*
    Plays a game of Rock Paper Scissors. It runs 5 rounds, keeps track 
    of scores for the human and computer, and prints the final result.
*/
function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let roundResult = playRound(humanChoice, computerChoice);
        
        if (roundResult.includes("win")) {
            humanScore++;
        }
        if (roundResult.includes("lose")) {
            computerScore++;
        }

        console.log(`Round ${i + 1}: ${roundResult}`);
    }

    console.log("-------------------")

    if(computerScore === humanScore) {
        console.log(`It's a tie.\nYour score: ${humanScore}\nComputer's score: ${computerScore}`)
        return;
    }
    if(computerScore < humanScore) {
        console.log(`You win!\nYour score: ${humanScore}\nComputer's score: ${computerScore}`);
        return;
    } 
    console.log(`You lose.\nYour score: ${humanScore}\nComputer's score: ${computerScore}`);
}

playGame();