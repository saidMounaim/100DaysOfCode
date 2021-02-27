const textrev = gsap.timeline();

textrev.from('.line span', 0.8, {
	y: 200,
	ease: Power2.easeOut,
	skewY: 10,
	delay: 0.1,
	stagger: {
		amount: 0.4,
	},
});
