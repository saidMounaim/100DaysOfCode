const form = document.querySelector("form");
const urlYtb = document.querySelector("input");
const iframe = document.querySelector("iframe");
const btnMp3 = document.getElementById("downloadMp3");

function validVideoId(id) {
	var img = new Image();
	img.src = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
	img.onload = function () {
		checkThumbnail(this.width);
	}
}

function checkThumbnail(width) {
	//HACK a mq thumbnail has width of 320.
	//if the video does not exist(therefore thumbnail don't exist), a default thumbnail of 120 width is returned.
	if (width === 120) {
		alert("Error: Invalid video id");
		btnMp3.style.display = "none";
	}
}

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	iframe.src = `https://www.youtube.com/embed/${urlYtb.value}`;
	btnMp3.addEventListener("click", () => {
		const url = `https://www.yt-download.org/api/button/mp3/${urlYtb.value}`
		var win = window.open(url, '_blank');
		win.focus();
	});
	btnMp3.style.display = "block";

	if (validVideoId(urlYtb.value)) {
		btnMp3.style.display = "block";
	}

})

