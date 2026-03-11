let linkToOpen = "";
let ageWarningLink = "";
let introPlayed = false;

function openPopup(event, message, link) {
  if (event) event.preventDefault();

  let popup = document.getElementById("popup");
  document.getElementById("popup-text").textContent = message;
  linkToOpen = link;

  togglePopup("popup", true);
}

function closePopup() {
  const popup = document.getElementById("popup");
  const card = document.querySelector(".card");
  popup.classList.add("fade-out");
  card.classList.add("popup-animation-reverse");
  setTimeout(() => {
    togglePopup("popup", false);
    popup.classList.remove("fade-out");
    card.classList.remove("popup-animation-reverse");
    resetAnimations();
  }, 500); // Match the duration of the fade-out transition
}

function confirmAction() {
  if (linkToOpen) window.location.href = linkToOpen;
}

function openAgeWarning(event, message, link) {
  if (event) event.preventDefault();

  let popup = document.getElementById("age-warning");
  document.getElementById("age-warning-text").textContent = message;
  ageWarningLink = link;

  togglePopup("age-warning", true);
}

function closeAgeWarning() {
  const popup = document.getElementById("age-warning");
  const card = document.querySelector(".card");
  popup.classList.add("fade-out");
  card.classList.add("popup-animation-reverse");
  setTimeout(() => {
    togglePopup("age-warning", false);
    popup.classList.remove("fade-out");
    card.classList.remove("popup-animation-reverse");
    resetAnimations();
  }, 500); // Match the duration of the fade-out transition
}

function confirmAgeAction() {
  if (ageWarningLink) window.location.href = ageWarningLink;
}

function togglePopup(popupId, show) {
  const popup = document.getElementById(popupId);
  popup.classList.toggle("show", show);
  document.querySelector(".card").classList.toggle("hidden", show);

  const card = document.querySelector(".card");
  if (show) {
    card.classList.add("popup-animation");
  }

  if (popupId === 'age-warning') {
    const popupContent = popup.querySelector('.popup-content');
    if (show) {
      popupContent.classList.add('shake');
    } else {
      popupContent.classList.remove('shake');
    }
  }
}

function resetAnimations() {
  const card = document.querySelector(".card");
  card.classList.remove("popup-animation", "popup-animation-reverse");
}

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');

  if (!introPlayed) {
    card.classList.add('intro-animation');

    setTimeout(() => {
      card.classList.remove('intro-animation');
      card.style.animation = 'empty-animation 0s forwards';
    }, 3000);

    introPlayed = true;
  }
});