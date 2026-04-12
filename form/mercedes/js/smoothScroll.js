'use strict';

const navLinks = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");

const links = [...navLinks, mainScroll];

links.forEach(l => {
    l.addEventListener('click', e => {
        e.preventDefault();
        const id = e.target.getAttribute("href").substring(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});