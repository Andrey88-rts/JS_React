'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');


// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

btn.addEventListener('click', () => {
  box.scrollTop += 100;
  
  
  // box.style.height = box.scrollHeight + 'px';
  

  // console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

console.log(box.clientHeight);

