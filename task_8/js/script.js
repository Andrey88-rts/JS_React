window.addEventListener("DOMContentLoaded", () => {
    const tabs = require("./modules/tabs.js");
    const calc = require("./modules/calc.js");
    const cards = require("./modules/cards.js");
    const forms = require("./modules/forms.js");
    const modal = require("./modules/modal.js");
    const slider = require("./modules/slider.js");
    const timer = require("./modules/timer.js");

    tabs();
    calc();
    cards();
    forms();
    modal();
    slider();
    timer();
});