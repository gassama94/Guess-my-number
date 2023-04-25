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


    /**
     * checking if there is a value in the input
     */
    if(!guess){
         document.querySelector('.message').textContent = '⛔️ No number!';

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        
       
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    }else if (guess > secretNumber){
        document.querySelector('.message').textContent = ' 📈 Too High';
       
    }else if (guess < secretNumber){
        document.querySelector('.message').textContent = ' 📉 Too low';
          

    }
})
