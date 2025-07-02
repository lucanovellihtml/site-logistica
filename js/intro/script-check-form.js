// Form italiano
const form = document.getElementById("contactForm");

if (form != null) {
    form.addEventListener("submit", async function (event) {

        // Blocco l'invio predefinito del form
        event.preventDefault()

        // Raccolgo tutti i dati del form
        const formData = new FormData(form);

        try {
            //Invia i dati a Formspree usando la fetch
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                form.reset(); // Resetta il form

                // REINDIRIZZA ALLA TUA PAGINA CUSTOM DOPO UN BREVE RITARDO
                setTimeout(() => {
                    window.location.href = 'https://www.lucanovelliws.it/post-form.html'; // SOSTITUISCI CON L'URL DELLA TUA PAGINA
                }, 1500); // Reindirizza dopo 1.5 secondi
            } else { // Se c'è stato un errore nell'invio
                // Tenta di leggere il messaggio di errore
                const data = await response.json();
                if (data && data.errors) {
                    formStatus.textContent = 'Errore: ' + data.errors.map(err => err.message).join(', ');
                } else {
                    formStatus.textContent = 'Errore durante l\'invio del messaggio. Riprova.';
                }
                formStatus.className = 'error';
            }
        } catch (error) { // Se c'è un errore di rete o altro
            formStatus.textContent = 'Si è verificato un problema di connessione.';
            formStatus.className = 'error';
            console.error('Errore di rete:', error);
        }

    });
}

// Form inglese
const formEn = document.getElementById("contactFormEn");

if (formEn) {
    formEn.addEventListener("submit", async function (event) {

        // Blocco l'invio predefinito del form
        event.preventDefault()

        // Raccolgo tutti i dati del form
        const formData = new FormData(formEn);

        try {
            //Invia i dati a Formspree usando la fetch
            const response = await fetch(formEn.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                formEn.reset(); // Resetta il form

                // REINDIRIZZA ALLA TUA PAGINA CUSTOM DOPO UN BREVE RITARDO
                setTimeout(() => {
                    window.location.href = 'https://www.lucanovelliws.it/post-form-en.html'; // SOSTITUISCI CON L'URL DELLA TUA PAGINA
                }, 1500); // Reindirizza dopo 1.5 secondi
            } else { // Se c'è stato un errore nell'invio
                // Tenta di leggere il messaggio di errore
                const data = await response.json();
                if (data && data.errors) {
                    formStatus.textContent = 'Errore: ' + data.errors.map(err => err.message).join(', ');
                } else {
                    formStatus.textContent = 'Errore durante l\'invio del messaggio. Riprova.';
                }
                formStatus.className = 'error';
            }
        } catch (error) { // Se c'è un errore di rete o altro
            formStatus.textContent = 'Si è verificato un problema di connessione.';
            formStatus.className = 'error';
            console.error('Errore di rete:', error);
        }

    });
}