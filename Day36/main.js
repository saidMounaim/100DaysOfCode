const btn = document.getElementById("btn");
const notifications = document.getElementById("notifications");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
    "Message Five"
];

const types = ['info', 'success', 'error'];

btn.addEventListener("click", () => showNotif());

const showNotif = (message = null, type = "") => {
    const notif = document.createElement("div");
    notif.classList.add("notif");
    notif.classList.add(type ? type : getRandomType());
    notif.innerHTML = message ? message : getRandomMessage();

    notifications.append(notif);

    setTimeout(() => {
        notif.remove();
    }, 4000);

}

const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
}

const getRandomType = () => {
    return types[Math.floor(Math.random() * types.length)];
}