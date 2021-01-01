const items = document.querySelectorAll('.item');
const modal = document.querySelector('.modal');

// OPEN MODAL & CLOSE
items.forEach((item) => {
	item.addEventListener('click', (e) => {
		const modal = e.currentTarget.querySelector('.modal');
		modal.classList.add('show');
	});
	const modal = item.querySelector('.modal');
	modal.addEventListener('click', (element) => {
		element.stopPropagation();
		console.log(element);
		if (element.target.classList.contains('modal')) {
			element.target.classList.remove('show');
			console.log('object');
		}
	});
});
