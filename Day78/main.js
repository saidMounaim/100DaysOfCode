const { gsap, Splitting } = window;

Splitting();

gsap.timeline({
    delay: 1,
    defaults: {
        duration: 1.25,
        stagger: 0.125,
        ease: "expo.inOut"
    }
})
    .fromTo('.card__image--wrapper', { yPercent: 110 }, { yPercent: 0 }, 0)
    .fromTo('.card__image--outer', { yPercent: -110 }, { yPercent: 0 }, 0)
