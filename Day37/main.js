const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        const xInside = x - buttonTop;
        const yInside = y - buttonLeft;

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = xInside + "px";
        circle.style.left = yInside + "px";

        this.append(circle);
        setTimeout(() => {
            circle.remove()
        }, 500000000000);

    })
})