'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document. querySelector('.heart');

// box.style.backgroundColor = "blue";
// box.style.width = '200px';

box.style.cssText = 'background-color: green';

btns[2].style.backgroundColor = 'red';
btns[2].style.borderRadius = '100%';

circles[2].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'orange';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'black'
// })