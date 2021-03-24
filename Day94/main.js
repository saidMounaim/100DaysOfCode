const countDownDate = new Date("Dec 31, 2021 00:00:00");

const countDownFunction = setInterval(function () {
    const now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Secondes "

    if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("demo").innerHTML = "EXPIRED"
    }

}, 1000)