const btn = document.querySelector("button");
const btns = document.querySelectorAll("button");

const deleteElement = (e) => {
    // let i = 0;
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", deleteElement);
    // }
};

// btn.addEventListener("click", deleteElement);

const link = document.querySelector("a");

link.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target);
});

btns.forEach(btn, () => {
    btn.addEventListener("click", deleteElement);
});