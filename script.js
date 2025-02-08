document.addEventListener("DOMContentLoaded", function () {
    // Attach event listeners for popup buttons
    document.querySelectorAll("[data-popup]").forEach(button => {
        button.addEventListener("click", function (event) {
            openPopup(event, this.dataset.message, this.dataset.link);
        });
    });

    document.querySelectorAll("[data-age-warning]").forEach(button => {
        button.addEventListener("click", function (event) {
            openAgeWarning(event, this.dataset.message, this.dataset.link);
        });
    });

    // Attach event listeners for close and confirm buttons
    document.getElementById("popup-close")?.addEventListener("click", closePopup);
    document.getElementById("popup-confirm")?.addEventListener("click", confirmAction);
    document.getElementById("age-warning-close")?.addEventListener("click", closeAgeWarning);
    document.getElementById("age-warning-confirm")?.addEventListener("click", confirmAgeAction);
});
// Variables to store links for popups
let linkToOpen = "";
let ageWarningLink = "";

/**
 * Opens a general confirmation popup.
 * @param {Event} event - The event object (prevents default link behavior).
 * @param {string} message - The message to display in the popup.
 * @param {string} link - The URL to open if confirmed.
 */
function openPopup(event, message, link) {
  if (event) event.preventDefault();

  document.getElementById("popup-text").textContent = message;
  linkToOpen = link;

  togglePopup("popup", true);
}

/**
 * Closes the general confirmation popup.
 */
function closePopup() {
  togglePopup("popup", false);
}

/**
 * Confirms the action and redirects to the stored link.
 */
function confirmAction() {
  if (linkToOpen) window.location.href = linkToOpen;
}

/**
 * Opens the 18+ age warning popup.
 * @param {Event} event - The event object (prevents default link behavior).
 * @param {string} message - The warning message to display.
 * @param {string} link - The URL to open if confirmed.
 */
function openAgeWarning(event, message, link) {
  if (event) event.preventDefault();

  document.getElementById("age-warning-text").textContent = message;
  ageWarningLink = link;

  togglePopup("age-warning", true);
}

/**
 * Closes the 18+ age warning popup.
 */
function closeAgeWarning() {
  togglePopup("age-warning", false);
}

/**
 * Confirms the age action and redirects to the stored 18+ link.
 */
function confirmAgeAction() {
  if (ageWarningLink) window.location.href = ageWarningLink;
}

/**
 * Toggles the visibility of a popup and the card.
 * @param {string} popupId - The ID of the popup to show/hide.
 * @param {boolean} show - Whether to show or hide the popup.
 */
function togglePopup(popupId, show) {
  document.getElementById(popupId).classList.toggle("show", show);
  document.querySelector(".card").classList.toggle("hidden", show);
}


// Variables to store links for popups
let linkToOpen = "";
let ageWarningLink = "";

/**
 * Opens a general confirmation popup.
 * @param {Event} event - The event object (prevents default link behavior).
 * @param {string} message - The message to display in the popup.
 * @param {string} link - The URL to open if confirmed.
 */
function openPopup(event, message, link) {
    if (event) event.preventDefault();
    
    document.getElementById("popup-text").textContent = message;
    linkToOpen = link;

    togglePopup("popup", true);
}

/**
 * Closes the general confirmation popup.
 */
function closePopup() {
    togglePopup("popup", false);
}

/**
 * Confirms the action and redirects to the stored link.
 */
function confirmAction() {
    if (linkToOpen) window.location.href = linkToOpen;
}

/**
 * Opens the 18+ age warning popup.
 * @param {Event} event - The event object (prevents default link behavior).
 * @param {string} message - The warning message to display.
 * @param {string} link - The URL to open if confirmed.
 */
function openAgeWarning(event, message, link) {
    if (event) event.preventDefault();

    document.getElementById("age-warning-text").textContent = message;
    ageWarningLink = link; 

    togglePopup("age-warning", true);
}

/**
 * Closes the 18+ age warning popup.
 */
function closeAgeWarning() {
    togglePopup("age-warning", false);
}

/**
 * Confirms the age action and redirects to the stored 18+ link.
 */
function confirmAgeAction() {
    if (ageWarningLink) window.location.href = ageWarningLink;
}

/**
 * Toggles the visibility of a popup and the card.
 * @param {string} popupId - The ID of the popup to show/hide.
 * @param {boolean} show - Whether to show or hide the popup.
 */
function togglePopup(popupId, show) {
    document.getElementById(popupId).classList.toggle("show", show);
    document.querySelector(".card").classList.toggle("hidden", show);
}
