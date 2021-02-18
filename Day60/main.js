gsap.from(".navbar", 2, {
    left: "-20%",
    ease: Expo.easeInOut,
    delay: 0.4
})

var tl = gsap.timeline({ pause: true });

tl.to(".nav", 1.8, {
    width: "94%",
    ease: Expo.easeInOut
})

tl.to('.nav-item', 0.6, {
    top: "0px",
    ease: Power3.easeInOut,
    stagger: 0.1,
    opacity: 1,
}, "-=0.8");

tl.reverse();

const navToggle = document.querySelector(".nav-toggle");
const navItem = document.querySelector(".nav-item");

navToggle.addEventListener("click", () => {
    tl.reversed(!tl.reversed());
})

navItem.addEventListener("click", () => {
    tl.reversed(!tl.reversed());
})