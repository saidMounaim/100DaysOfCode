const counter = document.querySelector(".percent");

function progress() {
    const windowScrollTop = $(window).scrollTop();
    const docHeight = $(document).height();
    const windowHeight = $(window).height();
    const progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
    const $bgColor = progress > 90 ? "#fff" : "#fff";
    const $textColor = progress > 90 ? "#fff" : "#fff";
    $("h1").text(Math.round(progress) + "%").css({ color: $textColor });
    $(".fill").height(progress + "%").css({ background: $bgColor });
}

progress();

$(document).on("scroll", progress);