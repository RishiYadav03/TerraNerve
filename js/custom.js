
(function () {
  const header = document.querySelector(".site-header");
  const banner = document.querySelector(".banner");

  if (!header || !banner) return;

  const bannerHeight = banner.offsetHeight;
  let ticking = false;

  function toggleSticky() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > bannerHeight - 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(toggleSticky);
      ticking = true;
    }
  }
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("wheel", requestTick, { passive: true });
  window.addEventListener("touchmove", requestTick, { passive: true });
  window.addEventListener("load", toggleSticky);
})();

(function () {
  const header = document.querySelector(".site-header");
  const about = document.querySelector(".page-header");

  if (!header || !about) return;

  const aboutHeight = about.offsetHeight;
  let ticking = false;

  function toggleSticky() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > aboutHeight - 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(toggleSticky);
      ticking = true;
    }
  }
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("wheel", requestTick, { passive: true });
  window.addEventListener("touchmove", requestTick, { passive: true });
  window.addEventListener("load", toggleSticky);
})();

// Mobile interface slider
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".tn-screen-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 50,
    coverflowEffect: { rotate: 0, stretch: 0, depth: 350, modifier: 1, slideShadows: false },
    autoplay: { delay: 2500, disableOnInteraction: false },
    speed: 1000
  });
});

// Service Slider
document.addEventListener("DOMContentLoaded", function () {
  var serviceSwiper = new Swiper(".featureSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
  const swiperEl = document.querySelector(".featureSwiper");
  swiperEl.addEventListener("mouseenter", () => serviceSwiper.autoplay.stop());
  swiperEl.addEventListener("mouseleave", () => serviceSwiper.autoplay.start());
});

// Back to top
(function () {
  const btn = document.getElementById('scrollTopBtn');
  const toggle = () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  };
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();

// About TN
document.addEventListener("DOMContentLoaded", function () {
  var serviceSwiper = new Swiper(".serviceSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
  const swiperEl = document.querySelector(".serviceSwiper");
  swiperEl.addEventListener("mouseenter", () => serviceSwiper.autoplay.stop());
  swiperEl.addEventListener("mouseleave", () => serviceSwiper.autoplay.start());
});

const buttons = document.querySelectorAll(".cat-btn");
                            const cards = document.querySelectorAll(".card");

                            buttons.forEach(btn => {
                                btn.addEventListener("click", () => {

                                    // highlight active btn
                                    buttons.forEach(b => b.classList.remove("active"));
                                    btn.classList.add("active");

                                    const category = btn.dataset.category;

                                    cards.forEach(card => {
                                        if (category === "all" || card.dataset.category === category) {
                                            card.style.display = "block";
                                        } else {
                                            card.style.display = "none";
                                        }
                                    });
                                });
                            });