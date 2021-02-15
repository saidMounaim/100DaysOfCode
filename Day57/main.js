const reveal = gsap.utils.toArray(".reveal");

reveal.forEach((text, i) => {
	ScrollTrigger.create({
		trigger: text,
		toggleClass: "active",
		toggleActions: 'play none none none',
	})
})

const images = gsap.utils.toArray(".img");

images.forEach((img, i) => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: "active",
		toggleActions: 'play none none none',
	})
})