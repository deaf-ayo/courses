var secretNumber = 27;
var numberGuess = prompt("Guess the secret number!");
var guess = Number(numberGuess);
if(guess < secretNumber) {
    alert("Try again. Guess higher!");
}
else if(guess > secretNumber) {
    alert("Try again. Guess lower!");
}
else {
    alert("Well done! You guessed the secret number!");
}