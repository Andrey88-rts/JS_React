"use strict";

const { log } = require("console");

// Методы перебора массивов

// filter

const mas = [4, "horse", "little"];

const masNew = mas.filter((num) => typeof num === "number");

console.log(masNew);

// map

const arr = ["Andrey", "VikTOr", "GeoRgiy", "VLadiSlaV"];

const newArr = arr.map((letter) => letter.toLowerCase());

console.log(newArr);

//reduce

// const num = [1, 2, 3, 4, 5];

// const newNum = num.reduce((acc, curr) => acc * curr, 5);

// console.log(newNum);

const num = ["apple", "banana", "pear"];

const newNum = num.reduce((acc, curr) => `${acc}, ${curr}`);

console.log(newNum);

const obj = {
    hum: "person",
    ann: "person",
    dog: "animal",
    cat: "animal",
};

const newArray = Object.entries(obj)
    .filter((item) => item[1] === "animal")
    .map((item) => item[0]);

console.log(newArray);