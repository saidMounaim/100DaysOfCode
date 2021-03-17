const imgBx = document.querySelectorAll(".imgBx");

imgBx.forEach(popup => popup.addEventListener("click", () => {
	popup.classList.toggle("active");
}))