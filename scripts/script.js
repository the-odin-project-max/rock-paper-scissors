const LOSING_TEXT_OUTPUT="You lose!";

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	let choice = choices[randomNumber]
	return choice;
}

function playRound(playerSelection, computerSelection) {
	while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
		alert("Please enter a valid choice.");
		playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
	}

	// Compare choices
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if
		(playerSelection === "rock" && computerSelection === "scissors" ||
		playerSelection === "paper" && computerSelection === "rock" ||
		playerSelection === "scissors" && computerSelection === "paper") {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return LOSING_TEXT_OUTPUT;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for(let i = 0; i < 5; i++){
		console.log(`\nPlayer turn: ${i +1}`);

		// Ask for player input
		let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
		let result = playRound(playerSelection, getComputerChoice());

		if (result === LOSING_TEXT_OUTPUT){
			computerScore++;
		} else {
			playerScore++;
		}
	}

	if(playerScore > computerScore){
		console.log("You save humans against machines.")
	} else {
		console.log("You lost and because of you terminator is going to become reality.")
	}
}

game();