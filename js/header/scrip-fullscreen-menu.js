
/*
  Script che gestisce l'animazione del menu' a tendina quando clicco il nav button.
*/
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const fullscreenMenu = document.getElementById('navbarNavAltMarkup');

// Quando clicco il bottone di open, mi viene mostrato il fullscreen menu con l'aggiunta della classe css 'open'
openMenuBtn.addEventListener('click', () => {
    fullscreenMenu.style.display = 'block';
    setTimeout(() => {
        fullscreenMenu.classList.add('open');
    }, 300);
});

/*closeMenuBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('open');
    setTimeout(() => {
        fullscreenMenu.style.display = 'none';
    }, 300); // Corrisponde alla durata della transizione (0.3s)
});*/