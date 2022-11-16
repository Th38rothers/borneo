/*-- Js Menu Bar Start --*/

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
/*-- Js Menu Bar Start --*/