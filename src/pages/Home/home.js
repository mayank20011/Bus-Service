document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 600,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
  const swiperEl = document.querySelector(".mySwiper");

  swiperEl.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  swiperEl.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });

  // testimonial swiper
  const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    speed: 600,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
  });
  const swiperEl2 = document.querySelector(".mySwiper2");
  swiperEl2.addEventListener("mouseenter", () => {
    swiper2.autoplay.stop();
  });
  swiperEl2.addEventListener("mouseleave", () => {
    swiper2.autoplay.start();
  });


  // for faq open close
  const questionDiv = document.querySelectorAll(".question-div");
  const answerPera = document.querySelectorAll(".answer-pera");
  answerPera[0].classList.add("block");
  answerPera[0].classList.remove("hidden");
  questionDiv.forEach((div, id) => {
    let flag = 0;
    div.addEventListener("click", () => {
      answerPera.forEach((p) => {
        if (p.classList.contains("block")) {
          flag = 1;
        }
      });
      if (flag == 1) {
      answerPera.forEach((p) => {
        p.classList.remove("block");
        p.classList.add("hidden");
      });
      answerPera[id].classList.add("block");
      answerPera[id].classList.remove("hidden");
    }
    });
  });

  // on load end here
});
