gsap.registerPlugin(ScrollTrigger);

/*
    Funzione per determinare il valore di 'start' in base alla larghezza del display
*/
function getResponsiveStart() {
    // Ottiene la larghezza della finestra in pixel
    const windowWidth = window.innerWidth;

    // Definisci i tuoi breakpoint e i corrispondenti valori di 'start'
    if (windowWidth < 768) {
        // Per schermi piccoli (es. mobili): l'animazione inizia quando la parte superiore della box
        // è al 70% della viewport (più in alto)
        return "top 70%";
    } else if (windowWidth >= 768 && windowWidth < 1200) {
        // Per schermi medi (es. tablet): l'animazione inizia quando la parte superiore della box
        // è al 80% della viewport
        return "top 80%";
    } else {
        // Per schermi grandi (es. desktop): l'animazione inizia quando la parte superiore della box
        // è al 70% della viewport (più in basso)
        return "top 70%";
    }
}

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
        markers: false

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
        //start: "top top",
        start: getResponsiveStart(),
        markers: false
    }

});

timeLineCounter.to(counterDaily, {
    innerText: 1934,
    duration: 0.5,
    snap: {
        innerText: 1 // Incremental il numero di un intero
    }
})
    .to(counterShipping, {
        innerText: 97,
        duration: 0.5,
        delay: 1,
        snap: {
            innerText: 1
        }
    })
    .to(counterWarehouse, {
        innerText: 1000,
        duration: 0.5,
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
        //start: "top top",
        start: getResponsiveStart(),
        markers: false
    }
})

timeLineScale.to(boxCounterDaily, {
    scale: 1.3, // Ingrandisci il testo del 50%
    duration: 0.5, // Durata dell'ingrandimento: 0.5 secondi
    yoyo: true, // Fa sì che l'animazione si ripeta all'indietro
    repeat: 1, // Ripeti l'animazione 1 volte (una volta in totale)
    ease: "power1.inOut", // Tipo di easing per un movimento più naturale
})
    .to(boxCounterShipping, {
        scale: 1.3,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        delay: 0.5
    })
    .to(boxCounterWarehouse, {
        scale: 1.3,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        delay: 0.5
    })

/*
    Gestione animazione gsap del footer
*/
const boxAnimato = document.getElementById("rowPartner");
const sectionPartner = document.getElementById("sectionPartner");

//gsap.from() significa che l'animazione parte dai valori specificati e va verso i valori CSS attuali dell'elemento.
gsap.from(boxAnimato, {
    y: 300,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: sectionPartner,
        start: "top top",
        end: "top top",
        //scrub: 1,
        markers: false
    }
});

/*
    Gestione animazione gsap della section chi siamo
*/
const sectionChiSiamo = document.getElementById("sectionChiSiamo");
const titleSectionChiSiamo = document.getElementById("titleSectionChiSiamo");

gsap.from(titleSectionChiSiamo, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: sectionChiSiamo,
        start: "top top",
        end: "center center",
        //scrub: 1,
        markers: false
    }
});

/*
    Gestione animazione gsap della section mission
*/
const sectionMission = document.getElementById("sectionMission");
const titleSectionMission = document.getElementById("titleSectionMission");

gsap.from(titleSectionMission, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: sectionMission,
        start: "top center",
        end: "center center",
        //scrub: 1,
        markers: false
    }
});

/*
    Gestione animazione gsap della section service
*/
const sectionService = document.getElementById("sectionService");
const titleSectionService = document.getElementById("titleSectionService");
const titleSectionServiceSmall = document.getElementById("titleSectionServiceSmall");
const paragraphSectionService = document.getElementById("paragraphSectionService");

let timeLineAnimationSectionService = gsap.timeline({

    scrollTrigger: {
        trigger: sectionService,
        start: "top center",
        end: "center center",
        //scrub: 1,
        markers: false
    }
})

timeLineAnimationSectionService.from(titleSectionService, {
    y: 50,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
})
    .from(titleSectionServiceSmall, {
        y: 50,
        opacity: 0,
        duration: 0.1,
        ease: "power2.out"
    })
    .from(paragraphSectionService, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    })

/*
    Gestione animazione gsap della section testimonial
*/
const sectionTestimonial = document.getElementById("sectionTestimonial");
const titleSectionTestimonial = document.getElementById("titleSectionTestimonial");

gsap.from(titleSectionTestimonial, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: sectionTestimonial,
        start: "top center",
        end: "center center",
        //scrub: 1,
        //markers: false
    }
});

/*
    Gestione animazione gsap della section contact
*/
const sectionContact = document.getElementById("sectionContact");
const titleSectionContact = document.getElementById("titleSectionContact");

gsap.from(titleSectionContact, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: sectionContact,
        start: "top center",
        end: "center center",
        //scrub: 1,
        //markers: false
    }
});

/*
    Gestione animazione gsap della section faq
*/
const sectionFaq = document.getElementById("sectionFaq");
const titleSectionFaq = document.getElementById("titleSectionFaq");

gsap.from(titleSectionFaq, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: sectionFaq,
        start: "top center",
        end: "center center",
        //scrub: 1,
        //markers: false
    }
});
