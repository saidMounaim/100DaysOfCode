const newQuote = document.getElementById('newQuote');
const tweetQuote = document.getElementById('tweetQuote');

async function fetchQuote() {
	const quote = await fetch('https://api.quotable.io/random').then((response) => response.json());
	return quote;
}

async function quote() {
	document.querySelector('.content').innerHTML = ``;
	const newQuote = await fetchQuote();
	const quote = document.createElement('div');
	quote.classList.add('quote');

	quote.innerHTML = `
    	<p>“${newQuote.content}“</p>
		<span>${newQuote.author}</span>
    `;

	document.querySelector('.content').append(quote);

	tweetQuote.addEventListener('click', () => {
		window.open(`https://twitter.com/intent/tweet/?text=${newQuote.content}`);
	});
}

newQuote.addEventListener('click', () => {
	quote();
});

quote();
