const container = document.querySelector('.container');
const unsplashUrl = 'https://source.unsplash.com/random';
const rows = 12;

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement('img');
	img.src = `${unsplashUrl}/${getRandomSize()}`;
	container.append(img);
}

function getRandomSize() {
	return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
	return Math.floor(Math.random() * 10) + 300;
}
