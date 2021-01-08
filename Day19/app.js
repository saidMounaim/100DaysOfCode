const postContainer = document.getElementById("post-container");
const loading = document.querySelector(".loader");
const filters = document.getElementById('filter');

let limit = 5;
let page = 1;

// Fetch Posts from API
async function fetchPost() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`).then(response => response.json());
    return data;
}

async function showPosts() {
    const posts = await fetchPost();

    posts.forEach(post => {

        const postElm = document.createElement('div');
        postElm.classList.add('post');

        postElm.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">
                    ${post.body}
                </p>
            </div>
        `
        postContainer.appendChild(postElm);

    })

}

showPosts();


// Filters Posts
function filtersPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach((post) => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();

        if (title.indexOf(term) > -1 || body.indexOf(term)) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    })

}

// Show Loader & Fetch More Posts
function showLoader() {

    setTimeout(() => {

        loading.classList.add("show");

        setTimeout(() => {
            page++;
            loading.classList.remove("show");
            showPosts();
        }, 1000)

    }, 300);

}

//Scroll at bottom
document.addEventListener("scroll", () => {

    const totalPageHeight = document.body.scrollHeight;
    const scrollPoint = window.scrollY + window.innerHeight;

    if (scrollPoint >= totalPageHeight) {
        showLoader();
    }
})


// Filters Posts
filters.addEventListener('keyup', filtersPosts);