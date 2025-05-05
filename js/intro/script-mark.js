/*
    Script per la gestione della sottolineature al title della section intro del main attraverso la classe mark.js.
*/

// Titolo
const title = document.getElementById("titleIntro")

// Instanza mark
const markInstance = new Mark(title);

// Titolo da sottolineare
const titleMarked = "La Logistica Smart per l'E-commerce del Futuro";

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