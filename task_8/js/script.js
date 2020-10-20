import tabs from "./modules/tabs.js";
import calc from "./modules/calc.js";
import cards from "./modules/cards.js";
import forms from "./modules/forms.js";
import modal from "./modules/modal.js";
import slider from "./modules/slider.js";
import timer from "./modules/timer.js";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(
        () => openModal(".modal", modalTimerId),
        50000
    );

    tabs(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        ".tabheader__item_active"
    );
    calc();
    cards();
    forms("form", modalTimerId);
    modal("[data-modal]", ".modal", modalTimerId);
    slider({
        container: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        slide: ".offer__slider",
        totalCounter: "#total",
        currentCounter: "#current",
    });
    timer(".timer", "2020-12-12");
});