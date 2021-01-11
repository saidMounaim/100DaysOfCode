const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

filter.addEventListener('input', (e) => filterData(e.target.value));

const getData = async () => {
	// const proxyurl = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://randomuser.me/api?results=30';
	const res = await fetch(url).then((response) => response.json());

	result.innerHTML = '';

	res.results.forEach((user) => {
		const li = document.createElement('li');
		listItems.push(li);
		li.innerHTML = `
        	<img src="${user.picture.large}" alt="${user.name.first}" />
			<div class="user-info">
				<h4>${user.name.first} ${user.name.last}</h4>
				<p>${user.location.city}, ${user.location.country}</p>
            </div>`;
		result.append(li);
	});
};

getData();

const filterData = (searchTerm) => {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm)) {
			item.classList.remove('hide');
		} else {
			item.classList.add('hide');
		}
	});
};
