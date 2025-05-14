
/*
  Script che gestisce l'animazione del menu' a tendina quando clicco il nav button.
*/
const openMenuBtn = document.getElementById('openMenuBtn');
const fullscreenMenu = document.getElementById('navbarNavAltMarkup');

/* Quando clicco il bottone di open, viene controllata la property che gestire la visualizzazione del
  fullscreen menu con l'aggiunta della classe css 'open'.
  Vengono richiamare le due funzioni activeMenu e notActiveMenu.
*/
openMenuBtn.addEventListener('click', () => {

    console.log(openMenuBtn.getAttribute("aria-expanded"));
    const flagOpenMenu = openMenuBtn.getAttribute("aria-expanded")
    if (flagOpenMenu === "true")
        activeMenu();
    else
        notActiveMenu();
});

function activeMenu() {
    fullscreenMenu.style.display = 'block';
    setTimeout(() => {
        fullscreenMenu.classList.add('open');
    }, 300);
}

function notActiveMenu() {
    fullscreenMenu.classList.remove('open');
    setTimeout(() => {
        fullscreenMenu.style.display = 'none';
    }, 300); // Corrisponde alla durata della transizione (0.3s)
}