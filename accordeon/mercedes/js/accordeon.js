'use strict';

// добавил немного анимаций для отзывчивости

const btns = document.querySelectorAll(".feature__link");
const uls = document.querySelectorAll(".feature-sub");

btns.forEach((b, i) => {
    b.addEventListener('click', async () => {

        if (b.classList.contains("feature__link_active")) {
            const ulAnim = uls[i].animate([
                { height: uls[i].offsetHeight + "px" },
                { height: '0px' }
            ], {
                duration: 100,
                easing: 'ease-in-out'
            });
            await ulAnim.finished;

            b.classList.remove("feature__link_active");
            uls[i].classList.add("hidden");
            return;
        }

        // for..of для раннего выхода из цикла и сохрания ассинхронности
        for (const [i, b] of btns.entries()) {
            if (!b.classList.contains("feature__link_active")) continue;

            b.classList.remove("feature__link_active");

            const ulAnim = uls[i].animate([
                { height: uls[i].offsetHeight + "px" },
                { height: '0px' }
            ], {
                duration: 100,
                easing: 'ease-in-out'
            });
            await ulAnim.finished;

            uls[i].classList.add("hidden");
            break;
        };

        b.classList.add("feature__link_active");

        uls[i].classList.remove("hidden");
        const ulAnim = uls[i].animate([
            { height: '0px' },
            { height: uls[i].offsetHeight + "px" }
        ], {
            duration: 100,
            easing: 'ease-in-out'
        });
    });
});