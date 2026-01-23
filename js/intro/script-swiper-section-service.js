const swiperEl = document.getElementById("swiperProject");

Object.assign(swiperEl, {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    }
});

swiperEl.initialize();