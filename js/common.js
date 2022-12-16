
const modal = document.querySelector(".modal-content");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const cancelButton = document.querySelector("#cancel");

function showLogin() {
    modal.classList.toggle("show-modal");
}

trigger.addEventListener("click", showLogin);
closeButton.addEventListener("click", showLogin);
cancelButton.addEventListener("click", showLogin);