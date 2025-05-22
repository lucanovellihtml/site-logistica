var swiperElTestimonial = document.getElementById("swiperTestimonial");
Object.assign(swiperElTestimonial, {
    grabCursor: true,
    autoplay: {
        delay: 2000,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
        },
        next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
        },
    },
});
swiperElTestimonial.initialize()