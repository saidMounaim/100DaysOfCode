const scroller = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
});

gsap.registerPlugin(ScrollTrigger);

scroller.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('.container', {
	scrollTop(value) {
		return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
	},
	getBoundingClientRect() {
		return {
			left: 0,
			top: 0,
			width: window.innerWidth,
			height: window.innerHeight,
		};
	},
});

ScrollTrigger.addEventListener('refresh', () => scroller.update());

ScrollTrigger.refresh();

/**
 * ANIMATION
 */

gsap.fromTo('.hero-text h1', { opacity: 0 }, { opacity: 1, delay: 0.5, ease: Power1.easeInOut });
gsap.fromTo('header .logo', { opacity: 0 }, { opacity: 1, delay: 0.5, ease: Power1.easeInOut }, '-=0.5');
gsap.fromTo(
	'header nav ul li',
	{ opacity: 0, position: 'relative', left: '10px' },
	{ opacity: 1, left: 0, delay: 0.5, stagger: 0.1 },
	'-=0.6'
);
