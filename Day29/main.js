const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);
        randomSelect();
    }
})

const createTags = (input) => {
    const tags = input.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerHTML = tag;
        tagsEl.append(tagEl);
    })
}

const randomSelect = () => {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

const pickRandomTag = () => {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

const highlightTag = (tag) => {
    tag.classList.add("highlights");
}

const unhighlightTag = (tag) => {
    tag.classList.remove("highlights");
}