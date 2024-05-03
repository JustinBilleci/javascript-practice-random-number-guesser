const prompt = require("prompt-sync")(); // 'npm install prompt-sync'

const target = 1 + Math.round(Math.random() * 99);
// minimum would be 1 and number would be a random between 1 and 100

let guesses = 0;

while(true) {
 guesses++

 const guess = Number(prompt("Guess the number (1-100): "));

 if (guess > target) {
    console.log("Your guess is too high.");
 } else if (guess < target) {
    console.log("Your guess is too low.");
 } else {
    console.log("Perfect!");
    break;
 }
}

console.log("You guessed the correct number in", guesses, "tries!");