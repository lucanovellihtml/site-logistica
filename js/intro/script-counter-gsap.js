gsap.registerPlugin(ScrollTrigger)

// Variabili
const counterDaily = document.getElementById("counterDaily");
const counterShipping = document.getElementById("counterShipping");
const counterWarehouse = document.getElementById("counterWarehouse");
const boxElement = document.getElementById("boxElement");
const boxCounterDaily = document.getElementById("boxCounterDaily");
const boxCounterShipping = document.getElementById("boxCounterShipping");
const boxCounterWarehouse = document.getElementById("boxCounterWarehouse");

/*
    Gestione animazione gsap per il counter
*/
let timeLineCounter = gsap.timeline({

    scrollTrigger: {
        trigger: boxElement,
        start: "top bottom",
        markers: true
    }

});

timeLineCounter.to(counterDaily, {
    innerText: 1934,
    duration: 2,
    snap: {
        innerText: 1 // Incremental il numero di un intero
    }
})
    .to(counterShipping, {
        innerText: 97,
        duration: 2,
        delay: 1,
        snap: {
            innerText: 1
        }
    })
    .to(counterWarehouse, {
        innerText: 1000,
        duration: 2,
        delay: 1,
        snap: {
            innerText: 1
        }
    })


/*
    Gestione animazione gsap dello scale quando si attiva il counter
*/
let timeLineScale = gsap.timeline({

    scrollTrigger: {
        trigger: boxElement,
        start: "top bottom",
        markers: true
    }
})

timeLineScale.to(boxCounterDaily, {
    scale: 1.2, // Ingrandisci il testo del 50%
    duration: 1, // Durata dell'ingrandimento: 0.5 secondi
    yoyo: true, // Fa sì che l'animazione si ripeta all'indietro
    repeat: 1, // Ripeti l'animazione 1 volte (una volta in totale)
    ease: "power1.inOut", // Tipo di easing per un movimento più naturale
})
    .to(boxCounterShipping, {
        scale: 1.2,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        delay: 1
    })
    .to(boxCounterWarehouse, {
        scale: 1.2,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        delay: 1
    })

