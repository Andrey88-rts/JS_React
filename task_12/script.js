"use strict";
// Ссылка на объект (не копия!!!!!) изменятся свойства обоих объектов
const obj = {
    a: 5,
    b: 2,
};

const newObj = obj;
newObj.a = 10;
console.log(obj);
console.log(newObj);
/////-------------------////////////

// Клонирование объекта (копия) - исходный объект не изменяется, создается его полная копия (глубокое копирование)
const human = {
    hand: 2,
    foot: 2,
    eyes: 2,
    tel: "+78888885552",
    gender: {
        male: "M",
        female: "F",
    },
};
console.log(human);
const clone = JSON.parse(JSON.stringify(human));
clone.gender.male = "John";
clone.foot = 3;
console.log(clone);
//////--------------------///////

// Kопирование методом перебора свойств объекта (копирует перечисляемые свойства)
// Если свойтсво объекта является тоже объектом, то оно становится общим.
// при изменении такого свойства в одном из объектов, он меняется и в другом!

let now = {
    day: "Mon",
    sun: true,
    feel: {
        night: "pain",
    },
};

let key;
let nowObj = {};

for (key in now) {
    nowObj[key] = now[key];
}

nowObj.feel.night = "lucky";
console.log(now);
nowObj.day = "Sunday";
console.log(nowObj);

// Клонирование с помощью Object.assign() - только поверхностное копирование на первом уровне вложенности
// Любое изменение сделанное на свойстве объекта применится ко всем ссылкам объекта

let objectEx = {
    a: 3,
    b: 5,
    c: {
        d: 9,
    },
};

let newEx = Object.assign(objectEx);
newEx.c.d = 25;
console.log(newEx);
objectEx.a = 7;
console.log(objectEx);