
/*
  Script che gestisce l'animazione del menu' a tendina quando clicco il nav button e i links.
*/
const openMenuBtn = document.getElementById('openMenuBtn');
const fullscreenMenu = document.getElementById('navbarNavAltMarkup');
const inputBtn = document.getElementById("inputCheck");
const labelBtn = document.getElementById("labelCheck");
const spanOne = labelBtn.querySelector("span:nth-of-type(1)");
const spanTwo = labelBtn.querySelector("span:nth-of-type(2)");
const spanThree = labelBtn.querySelector("span:nth-of-type(3)");
const body = document.body;
var flagOpenMenu;
/*

/* Quando clicco il bottone di open, viene controllata la property che gestisce la visualizzazione del
  fullscreen menu con l'aggiunta della classe css 'open'.
  Vengono richiamate le due funzioni activeMenu e notActiveMenu.
  La gestione del menu' è gestita dalla property aria-expanded( true = menu' aperto / false = menu' chiuso)
*/


/*
  Gestiamo l'animazione del menu quando Bootstrap attiva l'evento di "mostra" (show.bs.collapse).
  Questo evento si attiva *prima* che il menu diventi visibile.
*/
fullscreenMenu.addEventListener('show.bs.collapse', () => {
    //console.log("Evento Bootstrap: show.bs.collapse - Il menu sta per aprirsi");
    // bootstrap gestisce aria-expanded e collapsed, noi ci occupiamo dell'animazione
    // activeMenu() gestirà anche l'aggiornamento della checkbox e degli span
    activeMenu();
});

/*
  Gestiamo l'animazione del menu quando Bootstrap attiva l'evento di "nascondi" (hide.bs.collapse).
  Questo evento si attiva *prima* che il menu diventi nascosto.
*/
fullscreenMenu.addEventListener('hide.bs.collapse', () => {
    //console.log("Evento Bootstrap: hide.bs.collapse - Il menu sta per chiudersi");
    // bootstrap gestisce aria-expanded e collapsed, noi ci occupiamo dell'animazione
    // notActiveMenu() gestirà anche l'aggiornamento della checkbox e degli span
    notActiveMenu();
});

// Quando clicco il tag link, viene richiamata la funzione notActiveMenu.
const navbarDiv = document.getElementById("listMenuItems");
const listElement = navbarDiv.querySelectorAll("a");
listElement.forEach(item => {
    item.addEventListener('click', () => {
        bootstrap.Collapse.getInstance(fullscreenMenu).hide();
        notActiveMenu();
    });
});

// Funzione che attiva il menu'
function activeMenu() {
    fullscreenMenu.style.display = 'block';
    body.classList.add('menu-open-body');
    activeButtonCheckbox(true)
    setTimeout(() => {
        fullscreenMenu.classList.add('open');
    }, 300);
}

// Funzione che disattiva il menu'
function notActiveMenu() {
    fullscreenMenu.classList.remove('open');
    body.classList.remove('menu-open-body');
    activeButtonCheckbox(false)
    setTimeout(() => {
        fullscreenMenu.style.display = 'none';
    }, 300); // Corrisponde alla durata della transizione (0.3s)
}

// Funzione che gestisce il cambiamento del body del bottone
function activeButtonCheckbox(flag) {
    inputBtn.checked = flag;
    if (inputBtn.checked) {
        spanOne.classList.add("span-checked-style-one");
        spanTwo.classList.add("span-checked-style-two");
        spanThree.classList.add("span-checked-style-three");
    } else {
        spanOne.classList.remove("span-checked-style-one");
        spanTwo.classList.remove("span-checked-style-two");
        spanThree.classList.remove("span-checked-style-three");
    }
}