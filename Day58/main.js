let atScroll = false;
let parallaxTitle = document.querySelectorAll(".parallax-title");

const scrollProgress = () => {
	atScroll = true;
}

const raf = () => {
	if (atScroll) {
		parallaxTitle.forEach((element, index) => {
			element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
		})
		atScroll = false;
	}
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

window.addEventListener("scroll", scrollProgress);