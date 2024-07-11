const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("stop-scroll");
});

const btnCall = document.getElementById("btn-call");
const modalCallForm = document.getElementById("modal-call-form");

btnCall.addEventListener("click", () => {
  modalCallForm.classList.add("modal-parent--open");
});

// modalCallForm.querySelector('.modal').addEventListener('click', (e) => {
//   e._isClick = true;
// });
// modalCallForm.addEventListener('click', (e) => {
//   if (e._isClick === true) return;
//   modalCallForm.classList.remove('modal-parent--open');
// });

modalCallForm.addEventListener("click", (e) => {
  // Если клик был совершен непосредственно на модальном окне (а не на его дочерних элементах), то не закрываем окно
  if (e.target.closest(".modal")) return;

  modalCallForm.classList.remove("modal-parent--open");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open");
  }
});

const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: ".latest-shots__btn--right",
    prevEl: ".latest-shots__btn--left",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
