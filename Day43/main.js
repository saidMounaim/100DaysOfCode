const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = 0;
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerText;
		const increments = target / 200;
		if (c < target) {
			counter.innerText = `${Math.ceil(c + increments)}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});
