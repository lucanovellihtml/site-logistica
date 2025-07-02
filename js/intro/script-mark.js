/*
    Script per la gestione della sottolineature al title della section intro del main attraverso la classe mark.js.
*/

// Titolo
const title = document.getElementById("titleIntro")

// Instanza mark
const markInstance = new Mark(title);

// Titolo da sottolineare
const titleMarked = "Benvenuto in BV Express Logistic";

// Titolo da sottolineare in inglese
const titleMarkedEn = "Welcome to BV Express Logistics";

// Funzione per la pagina in italiano
markInstance.mark(titleMarked, {
    "separateWordSearch": false, // Disabilita la sottolineatura delle parole separate
    "done": function () {
        const elementiEvidenziati = title.querySelectorAll('mark');
        elementiEvidenziati.forEach(elemento => {
            // Aggiungi una classe per attivare l'animazione
            elemento.classList.add('animate');
        });
    }
});

// Funzione per la pagina in inglese
markInstance.mark(titleMarkedEn, {
    "separateWordSearch": false, // Disabilita la sottolineatura delle parole separate
    "done": function () {
        const elementiEvidenziati = title.querySelectorAll('mark');
        elementiEvidenziati.forEach(elemento => {
            // Aggiungi una classe per attivare l'animazione
            elemento.classList.add('animate');
        });
    }
});