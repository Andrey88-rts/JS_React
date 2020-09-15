"use strict";

// function showThis(a, b) {
//     console.log(this);

//     function mult() {
//         console.log(this === undefined);
//         return a * b;
//     }
//     console.log(mult());
// }

// showThis(3, 4);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);

//         function shot() {
//             console.log(this);
//         }
//         shot();
//     },
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello, ${this.name}`);
//     };
// }

// let andrey = new User("Andrey", 32);
// console.log(andrey.hello());

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "John",
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(37));

const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    console.log(this);
    e.target.style.backgroundColor = "green";
});

const obj = {
    num: 5,
    str: "big",
    sayNumber: function() {
        const say = () => console.log(this.num, this.str);
        say();
    },
};

obj.sayNumber();

// const double = (a) => a * 2;
// console.log(double(7));

const person = {
    name: "Andrey",
    age: 32,
    gender: "male",
    sayHello: function(professional, skills) {
        console.group("Human info:");
        console.log(
            `Hello, my name is ${this.name}, me ${this.age}, i'm ${this.gender}`
        );
        console.log(`I'm ${professional}, my life is ${skills}`);
        console.groupEnd();
    },
};

const person2 = {
    name: "John",
    age: 26,
    gender: "male",
};

const person3 = {
    name: "Olga",
    age: 41,
    gender: "female",
};

const person4 = {
    name: "Elena",
    age: 20,
    gender: "female",
};

person.sayHello("Frontend", "Gulp 4");
person.sayHello.bind(person2)("Backend", "Java");
person.sayHello.call(person3, "Database", "SQL");
person.sayHello.apply(person4, ["Frontend", "HTML5"]);