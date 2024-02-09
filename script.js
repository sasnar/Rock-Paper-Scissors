function getComputerChoice () {
    let choice = Math.floor(Math.random()*3+1);
    if (choice == 1) {
        return string = "Rock";
    } else if (choice == 2) {
        return string = "Paper";
    } else if (choice == 3) {
        return string = "Scissors";
    }
}

function gameRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return result = "It's a tie!";
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        return result = "You lose! Paper beats rock.";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return result = "You win! Rock beats scissors.";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return result = "You win! Paper beats rock.";
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return result = "You lose! Scissors beat paper.";
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return result = "You lose! Rock beats scissors.";
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return result = "You win! Scissors beat paper.";
    }
}

function playerInput() {
    let gameInput = "";
    while (true) {
        gameInput = prompt("Your turn: ", "");
        let gameInputLower = gameInput.toLowerCase();
        let capitalLetter = gameInputLower[0].toUpperCase();
        if (gameInputLower == "rock" || gameInputLower == "scissors" || gameInputLower == "paper") {
            return gameInputCorrect = capitalLetter + gameInputLower.substring(1);
        } else continue;
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0; 
    while (playerScore < 3 && computerScore < 3) {
        let playerChoice = playerInput();
        let computerChoice = getComputerChoice();
        let result = gameRound(playerChoice, computerChoice);
        if (result.substring(4,7) == "win") {
            playerScore += 1;
        } else if (result.substring(4,8) == "lose") {
            computerScore += 1;
        }
        console.log(`Your choice: ${playerChoice}
Computer's choice: ${computerChoice}
${result}
Your score: ${playerScore}
Computer's score: ${computerScore}`);   
    }
    if (playerScore == 3){
        console.log("You won!");
    } else if (computerScore == 3) {
        console.log("You lost!");
    }
}



const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', () => {
            const playerChoice = button.textContent;
            console.log(playerChoice);
    });
})

//add the function for even listener differently not through arrow pleees