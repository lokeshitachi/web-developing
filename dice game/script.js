'use strict';
// Selecting Elements 
const player0El= document.querySelector('.player--0')
const player1El= document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl   = document.querySelector('.dice');
const current0el=document.getElementById('current--0');
const current1el=document.getElementById('current--1');

const btnNew   = document.querySelector('.btn--new');
const btnRoll  = document.querySelector('.btn--roll');
const btnHold  = document.querySelector('.btn--hold');

let scores,currnetScore,activeplayer,player;


// Selecting Conditions

const init =function(){
    
     scores =[0,0];
     currnetScore = 0;
     activeplayer = 0;
     player = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0el.textContent = 0;
    current1el.textContent =0;

    diceEl.classList.add('hidden'); 
    player0El.classList.remove('player--winner');
     player1El.classList.remove('player--winner');
     player0El.classList.add('player--active');
     player1El.classList.remove('player--active');
};
init();

const switchPlayer = function(){
        document.getElementById(`current--${activeplayer}`).textContent = 0;
        activeplayer = activeplayer == 0 ? 1:0
        currnetScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

}

// //Rolling Dice Functionalaty ; 
btnRoll.addEventListener('click', function(){
    if(player === true){
     // 1.Generating  a randon dice roll
    const dice =Math.trunc(Math.random()*6)+1;
     console.log(dice);

    // 2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //console.log(diceEl.scr);
    
    // 3.Click for rolled
    if(dice!== 1){
            // add dice to current score
            currnetScore = currnetScore+ dice; // or currntScore += dice
            // console.log(currnetScore);
            document.getElementById(`current--${activeplayer}`).textContent = currnetScore;
            

    }else{
        //  1.if true , switch player 
        // currnetScore = currnetScore+ dice;
        // document.getElementById(`current--${activeplayer}`).textContent = 0;
        // activeplayer = activeplayer == 0 ? 1:0
        // currnetScore = 0;
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');
        switchPlayer();

    }}

});
btnHold.addEventListener('click',function(){
    if(player){
    // 1. Add Current Score to Active Player's Score
    scores[activeplayer] += currnetScore;
    console.log(scores[activeplayer]);
   
    // scores[1] = score[1] + currnetScore
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    // 2.Check if player's Score is >= 30
    if (scores[activeplayer]>=30){
    // Finish the Game
    player = false;
      diceEl.classList.add('hidden');
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
}else{

    // Switch to the next Player
        switchPlayer();
}
}


});
btnNew.addEventListener('click',init);