'use strict';

const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");

console.log(tabsHandlerElems);

for (const btn of tabsHandlerElems) {
    btn.addEventListener('click', async e => {
        for (const btn of tabsHandlerElems) btn.classList.remove("design-list__item_active");
        btn.classList.add("design-list__item_active");

        for (const cnt of tabsContentElems) {
            if (cnt.dataset.tabsField === btn.dataset.tabsHandler) cnt.classList.remove("hidden");
            else cnt.classList.add("hidden");
        }
    });
}