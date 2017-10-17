/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, diceRoll/* coding challenge 1 */, scoreLimit/* coding challenge 2 */;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. random number
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. update round score IF rolled number !1
    if (dice !== 1) {
      // add score
      roundScore += dice;
      limitArraySize(dice);/* coding challenge 1 */
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
      nextPlayer();
      }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    // add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if (scores[activePlayer] >= /*100*/ scoreLimit/* coding challenge 2 */) {
      document.getElementById('name-' + activePlayer).textContent ='Winner!';
      document.querySelector('.dice').style.display ='none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  diceRoll = [0, 0];/* coding challenge 1 */
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display ='none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  diceRoll = [0, 0];/* coding challenge 1 */
  scoreLimit = 100;/* coding challenge 2 */
  document.querySelector('.dice').style.display ='none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent ='Player 1';
  document.getElementById('name-1').textContent ='Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.getElementById('score-limit').value = null;
}
/*
document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score-0').textContent;
console.log(x);
*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

/* coding challenge 1 */
function limitArraySize(el) {
  diceRoll.unshift(el);
  if (diceRoll.length > 2 ) {
    diceRoll.length = 2;
  }
  doubleSixCheck();
}

function doubleSixCheck() {
  let total = diceRoll.reduce((total, amount) => total + amount);
  if (total === 12) {
    scores[activePlayer] = 0;
    roundScore = 0;
    diceRoll = [0, 0];
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
  }
}

/* coding challenge 2 */


document.getElementById('score-limit').addEventListener('change', function() {
  let scoreLimitInput = document.getElementById('score-limit').value;
  scoreLimit = parseInt(scoreLimitInput);
});

document.getElementById('score-limit').addEventListener('keyup', function() {
  let scoreLimitInput = document.getElementById('score-limit').value;
  scoreLimit = parseInt(scoreLimitInput);
});