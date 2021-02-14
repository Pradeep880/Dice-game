var scores, roundScores, activePlayer, gamePlaying = true, first, last;
scores = [0, 0];
roundScores = 0;
activePlayer = 0;

function ChangeHandler(val) {
     console.log(val);
 }
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
// document.querySelector('#current-1').textContent = '0'; both are similler
document.querySelector('.dice').style.display = 'none';
// console.log(document.querySelector('.Input'));
var n = 0;

document.querySelector('.submit').addEventListener('click', function () {
    if (n === 0) {
        let name1 = document.querySelector('.Input').value;
        if (name1 === '') {
            document.querySelector('.Input').placeholder = "Enter any name first";
        } else {
            document.querySelector(".player-0").innerHTML = name1;
     document.querySelector('.Input').value = '';
            n = 1;  
            document.querySelector('.Input').placeholder="Enter Second Player name"
       }
    
    } else {
        
   let name2 = document.querySelector('.Input').value;
        if (name2 === '') {
               document.querySelector('.Input').placeholder = "Enter any name first";
        } else {
             document.querySelector(".player-1").innerHTML = name2;
         document.querySelector('.Input').value = '';
            document.querySelector('.Input').style.display = "none";
            document.querySelector('.submit').style.display = "none";
         }
       
    }
   
})

// when you click roll dice means play a game
document.querySelector('.tap2').addEventListener('click', function () {
    if (gamePlaying) {
        //1.add a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // 2.dice print
        var diceP = document.querySelector('.dice');
        diceP.style.display = 'block';
        diceP.src = 'dice-' + dice + '.png';
        if (first == 6 && dice == 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice !== 1) {
            roundScores += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScores;
        }
        else {
            // next player if dice==1
            nextPlayer();
        }
        first = dice;
    }

});
// hold button coding when you click hold button
document.querySelector('.tap3').addEventListener('click', function () {
    if (gamePlaying) {
        //add scores in global varible
        scores[activePlayer] += roundScores;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.querySelector('.dice').style.display = "none";
        // Winner
        if (scores[activePlayer] >= 100) {
            // scores[activePlayer] = 0;
            document.querySelector('.player-' + activePlayer).innerHTML = "Winner!";
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            document.querySelector('.box-' + activePlayer).classList.remove('active');
            document.querySelector('.box-' + activePlayer).classList.add('winner');
            gamePlaying = false;
            document.querySelector('.dice').style.display = "none";
        }
        else {
            // move to next player if you click hold button
            nextPlayer();
        }
    }
});

// for next player
function nextPlayer() {
    if (activePlayer === 1) {
        activePlayer = 0;
    }
    else {
        activePlayer = 1;
    }
    roundScores = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector(".box-1").classList.toggle("active");
    document.querySelector(".box-0").classList.toggle("active");
    // document.querySelector('.dice').style.display = "none";
}
// New game coding
const NewGame = () => {
      scores = [0, 0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying = true;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector(".box-1").classList.remove("winner");
    document.querySelector(".box-0").classList.remove("winner");
    document.querySelector(".box-1").classList.remove("active");
    document.querySelector(".box-0").classList.remove("active");
    document.querySelector(".box-0").classList.add("active");
    // document.querySelector(".box-0").classList.add("active");
    document.querySelector(".player-1").innerHTML = "Player 2";
    document.querySelector(".player-0").innerHTML = "Player 1";
     document.querySelector('.Input').style.display = "block";
    document.querySelector('.submit').style.display = "block";
      document.querySelector('.Input').placeholder = "Enter First Player name";
}
document.querySelector('.tap1').addEventListener('click', function () {
    NewGame();
});
