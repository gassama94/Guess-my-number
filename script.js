'use strict'

let secretNumber = Math.trunc(Math.random() * 20 +1)
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
})
