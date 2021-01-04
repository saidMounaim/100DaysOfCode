function updateTextInput(val) {
	document.getElementById('rangeInput').innerHTML = val;
}

// DOM EL

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const genEl = document.getElementById('genBtn');
const clipboard = document.getElementById('clipboard');

const RandFun = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

genEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const lowerHas = lowerEl.checked;
	const upperHas = upperEl.checked;
	const numberHas = numbersEl.checked;
	const symbolHas = symbolsEl.checked;

	resultEl.innerHTML = generatePassword(lowerHas, upperHas, numberHas, symbolHas, length);
});

// ClipBoard Function
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if (!password) {
		return false;
	}
	textarea.value = password;
	document.body.append(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	// alert('Password copied to clipboard');
	swal('Password copied to clipboard');
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPasswod = '';
	const typesCount = lower + upper + number + symbol;

	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

	console.log(typesArr);

	if (typesCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPasswod += RandFun[funcName]();
		});
	}

	const finalPassword = generatedPasswod.slice(0, length);

	return finalPassword;
}

// Generator Chars

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@^#*=<>/,.{}[]&';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
