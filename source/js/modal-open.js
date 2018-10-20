var link = document.querySelector(".modal-link");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var basketLink = document.querySelectorAll(".product__link-basket");
for (var i = 0; i < basketLink.length; i++) {
  basketLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    overlay.classList.add("modal-overlay-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-overlay-show");
      }
    }
  });
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  overlay.classList.add("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});
