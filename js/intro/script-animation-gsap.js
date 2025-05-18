gsap.registerPlugin(ScrollTrigger)

/*
    Gestione animazione gsap per il name 
*/
const titleName = document.getElementById("titleName");
const boxElementName = document.getElementById("boxElementName");
const containerText = document.getElementById("containerText");

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: boxElementName,
        start: "top center",
        end: "top top",
        scoller: boxElementName,
        scrub: true,
        markers: true

    }
});

tl.to(titleName, {
    x: "-100%",
    duration: 5
})


/*
    Gestione animazione gsap per il counter
*/
const counterDaily = document.getElementById("counterDaily");
const counterShipping = document.getElementById("counterShipping");
const counterWarehouse = document.getElementById("counterWarehouse");
const boxElement = document.getElementById("boxElement");
const boxCounterDaily = document.getElementById("boxCounterDaily");
const boxCounterShipping = document.getElementById("boxCounterShipping");
const boxCounterWarehouse = document.getElementById("boxCounterWarehouse");
let timeLineCounter = gsap.timeline({

    scrollTrigger: {
        trigger: boxElement,
        start: "top bottom",
        markers: false
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
        markers: false
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

