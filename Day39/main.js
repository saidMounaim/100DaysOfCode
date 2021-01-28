//DOM
const sliderContainer = document.querySelector(".slider-container")
const slideRight = document.querySelector(".rightSide")
const slideLeft = document.querySelector(".leftSide")
const upBtn = document.querySelector(".up-btn")
const downBtn = document.querySelector(".down-btn")
const sliderLength = slideRight.querySelectorAll("div").length;


let activeSlideIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight;
	if (direction === "up") {
		activeSlideIndex++;
		if (activeSlideIndex > sliderLength - 1) {
			activeSlideIndex = 0;
		}
	} else if (direction === "down") {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = sliderLength - 1;
		}
	}
	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;

}