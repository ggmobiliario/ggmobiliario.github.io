function toggleMenu() {
    var aside = document.querySelector('aside');
    aside.classList.toggle('active');
}

ScrollReveal().reveal('header', {
    duration: 1000,
    distance: '200%',
    origin: 'top',
    opacity: null
});

ScrollReveal().reveal('.contenido', {
    duration: 3000,
    distance: '400%',
    origin: 'right',
    opacity: null
});

ScrollReveal().reveal('.contenido', {
    duration: 3000,
    distance: '400%',
    origin: 'right',
    opacity: null
});

ScrollReveal().reveal('#card1', {
    duration: 5000,
    distance: '400%',
    origin: 'bottom',
    opacity: null
});

ScrollReveal().reveal('.redesSociales', {
    duration: 8000,
    distance: '300%',
    origin: 'left',
    opacity: null
});