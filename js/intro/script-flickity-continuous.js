// Scorrimento continuo per Flickity
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');

    if (carousel) {
        // Inizializza Flickity
        const flkty = new Flickity(carousel, {
            cellAlign: 'left',
            contain: false,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            draggable: true,
            freeScroll: true,
            friction: 0.15,
            selectedAttraction: 0.01,
            freeScrollFriction: 0.03
        });

        let isPaused = false;
        let tickerSpeed = 0.5; // Velocità di scorrimento (pixel per frame)

        function update() {
            if (!isPaused) {
                flkty.x = (flkty.x - tickerSpeed) % flkty.slideableWidth;
                flkty.selectedIndex = flkty.dragEndRestingSelect();
                flkty.updateSelectedSlide();
                flkty.settle(flkty.x);
            }
            requestAnimationFrame(update);
        }

        // Avvia l'animazione
        update();

        // Pausa al passaggio del mouse (opzionale)
        carousel.addEventListener('mouseenter', function () {
            isPaused = true;
        });

        carousel.addEventListener('mouseleave', function () {
            isPaused = false;
        });

        // Pausa al tocco su dispositivi touch
        carousel.addEventListener('touchstart', function () {
            isPaused = true;
        }, { passive: true });

        carousel.addEventListener('touchend', function () {
            setTimeout(function () {
                isPaused = false;
            }, 1000);
        });

        // Pausa quando l'utente trascina
        flkty.on('dragStart', function () {
            isPaused = true;
        });

        flkty.on('dragEnd', function () {
            setTimeout(function () {
                isPaused = false;
            }, 1000); // Riprende dopo 1 secondo dal rilascio
        });
    }
});
