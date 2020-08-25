// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.parentNode);
// console.log(document.body.children);

const wrap = document.querySelector(".wrapper");
console.log(wrap.childElementCount);

const btn = document.querySelector("#current");
console.log(btn.parentElement.parentElement);

btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "red";
});

const attr = document.querySelector("[data-current='3']");
console.log(attr);
console.log(attr.parentNode);

attr.addEventListener("dblclick", (e) => {
    console.log(e.target);
    attr.parentNode.style.listStyle = "none";
    attr.parentElement.parentElement.classList.toggle("second-ul");
});