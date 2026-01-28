<!DOCTYPE html>
<html lang="en">

<head>
    <title>Hangman!</title>
</head>

<body>
    <h1>Hangman!</h1>
    <script>
        // List of possible words for the game
        var words = [
            "wearhouse",
            "monkey",
            "amazing",
            "pancake",
            "developer",
            "hangman",
            "function",
            "variable",
            "browser",
            "functioning"
        ];

        // Randomly select one word from the list
        var word = words[Math.floor(Math.random() * words.length)];

        // Create an array to store the player's progress (underscores for each letter)
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }

        // Track how many letters are left to guess
        var remainingLetters = word.length;

        // Limit the number of guesses allowed
        var maxGuesses = 10;
        var guessesUsed = 0;

        // Main game loop: runs until word is guessed or guesses run out
        while (remainingLetters > 0 && guessesUsed < maxGuesses) {
            // Show current progress and remaining guesses
            alert(answerArray.join(" ") + "\nGuesses left: " + (maxGuesses - guessesUsed));

            // Ask the player for a letter
            var guess = prompt("Guess a letter, or click Cancel to stop playing.");
            if (guess === null) break; // Exit if player cancels

            // Normalize input to lowercase
            guess = guess.toLowerCase();

            // Validate input: must be a single letter a–z
            if (guess.length !== 1 || !guess.match(/[a-z]/)) {
                alert("Please enter a single letter");
                continue; // Skip invalid input without using a guess
            }

            var correctGuess = false;

            // Check if guessed letter is in the word
            for (var j = 0; j < word.length; j++) {
