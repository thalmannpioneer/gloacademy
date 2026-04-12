'use strict';

const form = document.querySelector(".form-test-drive");

const data = {};

form.addEventListener('submit', e => {
    e.preventDefault();

    for (const { name, value } of form.elements) if (name) data.name = value;

    for (const val of Object.values(data)) {
        if (val.trim() === "") {
            alert("Поля не должны быть пустыми!");
            return;
        }
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(resp => {
        if (resp.status === 200 || resp.status === 201) return resp.json();
        else throw new Error(resp.status);
    }).then(data => {
        form.reset();
    }).catch(err => {
        console.log(err.message);
    });
});