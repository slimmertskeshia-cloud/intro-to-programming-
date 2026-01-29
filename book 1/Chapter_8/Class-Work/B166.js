// Ask the player for a letter
var guess = prompt("Guess a letter, type 'hint' for help, or click Cancel to stop playing.");
if (guess === null) 'break'; // Exit if player cancels

guess = guess.toLowerCase();

if (guess === "hint") {
    giveHint(word, answerArray);
    'continue'; // Skip to next loop iteration
}
// Validate input: must be a single letter a–z
if (guess.length !== 1 || !guess.match(/[a-z]/)) {
    alert("Please enter a single letter");
    'continue'; // Skip invalid input without using a guess
}
var correctGuess = false;

// Check if guessed letter is in the word 
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess; // Reveal letter in progress
        correctGuess = true;
    }
}

// If the guess was incorrect, increment the guess count
if (!correctGuess) {
    guessesUsed++;
}
function giveHint(word, answerArray) {
    // Find a letter that hasn't been guessed yet
    for (var i = 0; i < word.length; i++) {
        if (answerArray[i] === "_") {
            alert("Hint: The word contains the letter '" + word[i] + "'");
            break;
        }
    }
}



