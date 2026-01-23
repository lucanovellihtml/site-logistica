document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {

            // 1. Validazione Bootstrap
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }

            // 2. Secondo Controllo (JS Custom) - Previene bypass "Ispeziona Elemento"
            const formData = new FormData(contactForm);
            const ragioneSociale = formData.get("ragioneSociale");
            const email = formData.get("email");
            const telefono = formData.get("telefono");

            // Esempio di validazione Regex per email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Esempio di validazione per telefono (almeno 6 cifre)
            const telRegex = /^[0-9\s\+\-\(\)]{6,}$/;

            let isValid = true;

            if (!ragioneSociale || ragioneSociale.trim().length === 0) {
                isValid = false;
            }
            if (!email || !emailRegex.test(email)) {
                isValid = false;
            }
            if (!telefono || !telRegex.test(telefono)) {
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
                alert("Errore nella validazione dei dati. Per favore controlla i campi inseriti.");
                return;
            }

            // Se arriviamo qui, il form è valido. Procediamo con l'invio asincrono.
            event.preventDefault();
            contactForm.classList.add('was-validated');

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');

                    // Mostra il popup (modal Bootstrap) al posto del redirect
                    const successModalElement = document.getElementById('successModal');
                    if (successModalElement) {
                        const successModal = new bootstrap.Modal(successModalElement);
                        successModal.show();
                    }
                } else {
                    alert("Si è verificato un errore durante l'invio. Riprova più tardi.");
                }
            } catch (error) {
                console.error("Errore di rete:", error);
                alert("Problema di connessione. Verifica la tua linea e riprova.");
            }
        });
    }
});
