let linkToOpen = "";
let ageWarningLink = "";

function openPopup(event, message, link) {
    if (event) event.preventDefault();
    linkToOpen = link;
    const popup = document.getElementById("popup");
    document.getElementById("popup-text").textContent = message;
    togglePopup("popup", true);
}

function openAgeWarning(event, message, link) {
    if (event) event.preventDefault();
    ageWarningLink = link;
    const popup = document.getElementById("age-warning");
    document.getElementById("age-warning-text").textContent = message;
    togglePopup("age-warning", true);
}

function togglePopup(popupId, show) {
    const popup = document.getElementById(popupId);
    const card = document.querySelector(".card");

    if (show) {
        popup.classList.add("show");
        card.classList.add("card-dim");
    } else {
        popup.classList.remove("show");
        card.classList.remove("card-dim");
    }
}

function closePopup() { togglePopup("popup", false); }
function closeAgeWarning() { togglePopup("age-warning", false); }

function confirmAction() { if (linkToOpen) window.location.href = linkToOpen; }
function confirmAgeAction() { if (ageWarningLink) window.location.href = ageWarningLink; }

// Close on background click
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        closePopup();
        closeAgeWarning();
    }
};