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
// when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        
       // color changes to green if palyer wins and width number gets bigger
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        // when guess is too high
    }else if (guess > secretNumber){
        if(score > 0){

            document.querySelector('.message').textContent = ' 📈 Too High';
            //score reduces by 1 if the secret number is high
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😭 You lost the Game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';

        }

        // when guess is too low
    }else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = ' 📉 Too low';
            //score reduces by 1 if the secret number is low
            score = score - 1;
            document.querySelector('.score').textContent = score;
            
        }else{
            document.querySelector('.message').textContent = '😭 You lost the Game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';

        }      

    }
})
