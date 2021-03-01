function animateHover() {
	var $img = $(".img");

	$img.mousemove(function (e) {
		var xPos = $(this).data("xPos");
		var yPos = $(this).data("yPos");

		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var left = mouseX - xPos;
		var top = mouseY - yPos;
		var origin = "center center -300"
		var xPerc = ((left - $(this).data("itemWidth") / 2) / $(this).data("itemWidth")) * 200;
		var yPerc = ((top - $(this).data("itemHeight") / 2) / $(this).data("itemHeight")) * 200;


		gsap.to($(this).data("imgOuter"), 3, {
			rotationX: 0.1 * yPerc,
			rotationY: -0.1 * xPerc,
			transformOrigin: origin,
			ease: Expo.easeOut
		});

	})


	$img.each(function () {
		$(this).data("xPos", $(this).offset().left);
		$(this).data("yPos", $(this).offset().top);
		$(this).data("itemWidth", $(this).width());
		$(this).data("itemHeight", $(this).height());
		$(this).data("imgOuter", $(this).find(".img-inner"));
	})

	$img.on("mouseleave", function () {
		gsap.to($(this).data("imgOuter"), 3, {
			rotationX: 0,
			rotationY: 0,
			transformOrigin: origin,
			ease: Expo.easeOut
		});
	})

}

animateHover();