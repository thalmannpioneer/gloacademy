'use strict';

const modalBtn = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");

modalBtn.forEach(b => b.addEventListener('click', e => modal.classList.remove("hidden")));
modal.addEventListener('click', e => {
    if (e.target.classList.contains("overlay") || e.target.classList.contains("modal__close")) modal.classList.add("hidden");
});