'use strict';

const burgerBtn = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");

const toggle = () => {
    burgerBtn.classList.toggle("humburger-menu-active");
    menu.classList.toggle("menu-active")
};

burgerBtn.addEventListener('click', toggle);

navLinks.forEach(l => l.addEventListener('click', e => {
    if (burgerBtn.classList.contains("humburger-menu-active")) toggle();
}));