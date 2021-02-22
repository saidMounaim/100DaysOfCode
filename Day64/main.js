var cursor = $(".cursor"),
	follower = $(".cursor-follower")

var posX = 0,
	posY = 0,
	mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function () {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		TweenMax.set(follower, {
			css: {
				left: posX - 20,
				top: posY - 20
			}
		})
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		})
	}
})

$(document).on("mousemove", function (e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$(".portfolio-item").hover(function () {
	cursor.addClass('active');
	follower.addClass("active")
}, function () {
	cursor.removeClass('active');
	follower.removeClass("active")
})