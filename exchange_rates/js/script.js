"use strict";

const rubl = document.querySelector("#rub");
const dollar = document.querySelector("#usd");

rubl.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("load", () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            dollar.value = (+rubl.value / data.current.usd).toFixed(2);
        } else {
            dollar.value = "что то пошло не так";
        }
    });
});