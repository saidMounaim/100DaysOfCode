const input = document.getElementById("search");
const gridElement = document.querySelector(".grid-api");

function showItems(dataApis) {
    gridElement.innerHTML = "";
    dataApis.forEach(element => {
        const itemElement = document.createElement("a");
        itemElement.classList.add("item");
        itemElement.setAttribute("href", `${element.Link}`);
        itemElement.setAttribute("target", "_blank");
        itemElement.innerHTML = `
            <h2>${element.API}</h2>
            <span>${element.Category}</span>
            <p>${element.Description}</p>
        `
        gridElement.append(itemElement);

    })
}

//fetch Api
async function fetchApi() {
    const data = await fetch(`https://api.publicapis.org/entries`).then(response => response.json());
    showItems(data.entries);
}

async function searchApi(query) {
    const data = await fetch(`https://api.publicapis.org/entries?category=${query}&https=true`).then(response => response.json());
    showItems(data.entries);
}

input.addEventListener('keyup', function (e) {
    const value = e.target.value;
    console.log(value);
    searchApi(value);
})

fetchApi();