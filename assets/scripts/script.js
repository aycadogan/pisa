////////////// CONTACT /////////////////

const modal = document.querySelector(".contact-modal");
const openBtn = document.querySelector(".menu").children[2];
//show contact
openBtn.addEventListener("click", function () {
  modal.className = "contact-modal active";
});

//hide contact
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.className = "contact-modal";
  }
});

////////////// ABOUT /////////////////
//flip cards
const cards = document.getElementsByClassName("about-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    if (cards[i].classList.length == 2) {
      cards[i].className = "about-card";
    } else {
      cards[i].className = "about-card hover";
    }
  });
}
