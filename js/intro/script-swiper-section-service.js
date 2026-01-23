const animation = { duration: 50000, easing: (t) => t };

const slider = new KeenSlider("#keen-slider-project", {
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
        perView: "auto",
        spacing: 20,
    },
    breakpoints: {
        "(min-width: 768px)": {
            slides: { perView: "auto", spacing: 30 },
        },
        "(min-width: 1200px)": {
            slides: { perView: "auto", spacing: 40 },
        },
        "(min-width: 1600px)": {
            slides: { perView: "auto", spacing: 50 },
        },
    },
    created(s) {
        s.moveToIdx(5, true, animation);
    },
    updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
});