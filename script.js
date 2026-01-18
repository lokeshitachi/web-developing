'use strict';//DOM = Document object model
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number'
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent= 30;
document.querySelector('.guess').value=23;
console.log(document.querySelector(".guess").value);
*/
let secnumber = Math.trunc(Math.random()*10) +1 ;
let score  = 20;
let highscore =0;
const displayMessage = function(message){
   document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',
function(){ const guess = Number (document.querySelector('.guess').value);
               console.log(guess,typeof guess);
               // when no input 
               if (!guess){
                           displayMessage('⛔No Number');
                           // document.querySelector('.message').textContent = '⛔No Number'
                           // when player wins
                           }else if(guess === secnumber){
                             displayMessage('correct number😊');
                              document.querySelector('body').style.backgroundColor ='#60b347';
                              document.querySelector('.number').style.width ='30rem';
                              score = score + 10;
                              document.querySelector('.score').textContent = score;
                              document.querySelector('.number').textContent = secnumber;
                              if (score > highscore){
                                 highscore = score;
                                 document.querySelector('.highscore').textContent= highscore;
                              }
                              // guess is  high
                           }else if (guess !== secnumber){
                              if (score >0){
                                 document.querySelector('.message').textContent = guess > secnumber ?'number is high📈': "number is low 📉"
                                 score = score -1;
                                 document.querySelector('.score').textContent = score;
                              }else {displayMessage('you lost')};

                          // }else if (guess >secnumber){
                           //    if (score >0){
                           //       document.querySelector('.message').textContent = 'number is high📈'
                           //       score = score -1;
                           //       document.querySelector('.score').textContent = score;
                           //        document.querySelector('body').style.backgroundColor ='#eb715eff';
                           //    }else {document.querySelector('.message').textContent = 'you lost'}
                           //    // guess is low
                           // }else if (guess < secnumber){
                           //    if (score >0){
                           //       document.querySelector('.message').textContent = "number is low 📉"
                           //       score--;
                           //       document.querySelector('.score').textContent = score;
                           //        document.querySelector('body').style.backgroundColor ='#2e51eaff';
                           //    }else {document.querySelector('.message').textContent = 'you lost'}
                              
                           }
               });

               document.querySelector('.again').addEventListener(
   'click',function(){
      score =20;
      secnumber = Math.trunc(Math.random()*10) +1 ;
       document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor ='#171515';
      document.querySelector('.number').style.width ='15rem';

   }
)
console.log('hii');

               
