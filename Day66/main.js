let parent = document.querySelectorAll("[data-collapse]");
parent.forEach(function (element) {
	let clickTarget = element.querySelector("*");
	let collapseElement = element.nextElementSibling;
	let collapseElementChildren = collapseElement.children;

	let tl = new TimelineMax({
		reversed: true,
		paused: true
	})


	tl.from(collapseElement, 1.6, { className: "+=heightzero", ease: Expo.easeInOut })

	tl.staggerFrom(collapseElementChildren, 1, { autoAlpha: 0, y: "40%", ease: Expo.easeInOut }, 0.08, "open+=.1");


	clickTarget.addEvenetListner("click", () => {
		tl.reversed() ? tl.play() : tl.reverse();
	})

})