Array.from(document.querySelectorAll('.images')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));
	new hoverEffect({
		parent: el,
		intensity: 0.3,
		image1: imgs[0].getAttribute('src'),
		image2: imgs[1].getAttribute('src'),
		displacementImage: '../images/effect1.jpg',
	});
});
