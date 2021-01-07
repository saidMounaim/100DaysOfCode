const jobElements = document.querySelectorAll('.job');

jobElements.forEach((job) => {
	job.addEventListener('click', (elm) => {
		const modal = job.querySelector('.modal');
		modal.classList.add('show');
	});
	const modal = job.querySelector('.modal');
	modal.addEventListener('click', (e) => {
		e.stopImmediatePropagation();
		if (e.target.classList.contains('modal')) {
			e.target.classList.remove('show');
		}
	});
});
