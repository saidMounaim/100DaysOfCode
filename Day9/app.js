const containerPopUp = document.querySelector(".popup-container");
const popup = document.querySelector('.popup');

formUrl.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.target.Url.value;
    fetchUrl(value);
});

const fetchUrl = async (url) => {
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(response => response.json());
    const ulPopup = document.createElement('ul');
    ulPopup.innerHTML = `
        <li>Long URL: <a href=${data.result.original_link}
        target="_blank">${data.result.original_link}</a></li>
        <li>Short URL: <a href=${data.result.full_short_link} target="_blank">${data.result.full_short_link}</a></li>
    `
    popup.append(ulPopup);
    if (data) {
        containerPopUp.classList.add("show");
        Url.value = "";
    }
}

containerPopUp.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-container")) {
        e.target.classList.remove("show");
    }
})