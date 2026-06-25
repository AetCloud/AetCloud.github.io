let linkToOpen = "";
let ageWarningLink = "";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".icons").classList.add("hidden-buttons");
  // Comment or uncomment the line above to hide buttons
});

document.addEventListener("DOMContentLoaded", () => {
  const pfp = document.getElementById("pfp-image");

  pfp.onerror = () => {
    pfp.src = "pfp.jpg";
  };

  pfp.src = "pfp.png";
});

function openPopup(event, message, link) {
  if (event) event.preventDefault();
  document.getElementById("popup-text").textContent = message;
  linkToOpen = link;
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
function confirmAction() {
  if (linkToOpen) window.location.href = linkToOpen;
}

function openAgeWarning(event, message, link) {
  if (event) event.preventDefault();
  document.getElementById("age-warning-text").textContent = message;
  ageWarningLink = link;
  document.getElementById("age-warning").classList.add("show");
}

function closeAgeWarning() {
  document.getElementById("age-warning").classList.remove("show");
}
function confirmAgeAction() {
  if (ageWarningLink) window.location.href = ageWarningLink;
}
