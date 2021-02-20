const link = document.querySelectorAll('nav > .hover-this');
const cursor = document.querySelector('.cursor');

const animateit = function (e) {
	const span = this.querySelector('span');
	const { offsetX: x, offsetY: y } = e;
	const { offsetWith: width, offsetHeight: height } = this;
	const move = 25;
	const xMove = (x / width) * (move * 2) - move;
	const yMove = (y / height) * (move * 2) - move;
	span.style.transform = `translate(${xMove}px, ${yMove}px)`;
	if (e.type === 'mouseleave') span.style.transform = '';
};

const editCursor = (e) => {
	const { clientX: x, clientY: y } = e;
	cursor.style.left = x + 'px';
	cursor.style.top = y + 'px';
};

link.forEach((b) => b.addEventListener('mousemove', animateit));
link.forEach((b) => b.addEventListener('mouseleave', animateit));

window.addEventListener('mousemove', editCursor);
