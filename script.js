'use strict'

let secretNumber = Math.trunc(Math.random() * 20 +1)
let score = 20;
let highScore = 0;


/**
 * Add click  Eventlistener to check button and log the value of guess to console
 */
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
})
