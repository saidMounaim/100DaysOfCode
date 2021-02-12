document.addEventListener('mousemove', (e) => {
	gsap.to(".image", {
		x: e.clientX,
		y: e.clientY,
		stagger: -0.1,
	})
})