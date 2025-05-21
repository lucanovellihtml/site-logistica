const swiperEl = document.getElementById("swiperProject");
Object.assign(swiperEl, {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
});
swiperEl.initialize();