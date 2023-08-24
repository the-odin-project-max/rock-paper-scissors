const LOSING_TEXT_OUTPUT = "You lose this one!";

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	let choice = choices[randomNumber]
	return choice;
}

function playRound(playerSelection, computerSelection) {
	while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
		console.log("Please enter a valid choice.");
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

function resetGame() {
	computerScore = 0;
	playerScore = 0;
	document.querySelector('.display > .player-choice').textContent = "Waiting for your choice...";
	document.querySelector('.display > .computer-choice').textContent = "Computing his choice...";
	document.querySelector('.display > .result').textContent = "Don't know yet !";
	document.querySelector('.display > .score > .player-score').textContent = "0";
	document.querySelector('.display > .score > .computer-score').textContent = "0";
	console.clear();
}

let computerScore = 0;
let playerScore = 0;

document.querySelectorAll('.controls .game-controls button').forEach(choice => {
	choice.addEventListener('click', () => {
		const playerSelection = choice.id.toLowerCase();
		const computerSelection = getComputerChoice();
		const result = playRound(playerSelection, computerSelection);
		if (result === LOSING_TEXT_OUTPUT) {
			computerScore++;
		} else {
			playerScore++;
		}
		// Update displays
		document.querySelector('.display > .player-choice').textContent = playerSelection;
		document.querySelector('.display > .computer-choice').textContent = computerSelection;
		document.querySelector('.display > .result').textContent = result;
		document.querySelector('.display > .score > .player-score').textContent = playerScore;
		document.querySelector('.display > .score > .computer-score').textContent = computerScore;

		if (playerScore === 5 || computerScore === 5) {

			if (playerScore > computerScore) {
				alert("You save humans against machines.")
				resetGame();
			} else {
				alert("You lost and because of you terminator is going to become reality.")
				resetGame();
			}
		}
	});
});

document.querySelector('#reset').addEventListener('click', resetGame);



// function game() {
// 	let playerScore = 0;
// 	let computerScore = 0;

// 	for(let i = 0; i < 5; i++){
// 		console.log(`\nPlayer turn: ${i +1}`);

// 		// Ask for player input
// 		let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
// 		let result = playRound(playerSelection, getComputerChoice());

// 		console.info(result);


// 	}

// 	if(playerScore > computerScore){
// 		console.log("You save humans against machines.")
// 	} else {
// 		console.log("You lost and because of you terminator is going to become reality.")
// 	}
// }

// game();