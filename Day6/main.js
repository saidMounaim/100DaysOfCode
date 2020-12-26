const X_CLASS = 'x';
const CIRLCE_CLASS = 'circle';

const WINNINGS_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winnigMessageTextElement = document.querySelector('[data-winnig-text]');
const winnigMessageElement = document.getElementById('winnigMessage');
const restartBtn = document.getElementById('restartButton');

let circleTurn;

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
	winnigMessageElement.classList.remove('show');
	circleTurn = false;
	cellElements.forEach((cell) => {
		cell.classList.remove(X_CLASS);
		cell.classList.remove(CIRLCE_CLASS);
		cell.removeEventListener('click', handlerClick);
		cell.addEventListener('click', handlerClick, { once: true });
	});
	setBoardHoverClass();
}

function handlerClick(e) {
	const cell = e.target;
	const currentClass = circleTurn ? CIRLCE_CLASS : X_CLASS;
	placeMark(cell, currentClass);

	if (checkWin(currentClass)) {
		endGame(false);
	} else if (isDraw()) {
		endGame(true);
	} else {
		switchTurn();
		setBoardHoverClass();
	}
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function switchTurn() {
	circleTurn = !circleTurn;
}

function setBoardHoverClass() {
	board.classList.remove(X_CLASS);
	board.classList.remove(CIRLCE_CLASS);
	if (circleTurn) {
		board.classList.add(CIRLCE_CLASS);
	} else {
		board.classList.add(X_CLASS);
	}
}

function checkWin(currentClass) {
	return WINNINGS_COMBINATIONS.some((combinitaion) => {
		return combinitaion.every((index) => {
			return cellElements[index].classList.contains(currentClass);
		});
	});
}

function endGame(draw) {
	if (draw) {
		winnigMessageTextElement.innerHTML = `Draw!`;
	} else {
		winnigMessageTextElement.innerHTML = `${circleTurn ? `O's` : `X's`} Wins!`;
	}
	winnigMessageElement.classList.add('show');
}

function isDraw() {
	return [...cellElements].every((cell) => {
		return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRLCE_CLASS);
	});
}
