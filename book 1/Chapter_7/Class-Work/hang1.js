 var words = [
            "javascript",
            "monkey",
            "amazing",
            "pancake",
            "developer",
            "hangman",
            "function",
            "variable",
            "browser",
            "coding"
        ];

        var word = words[Math.floor(Math.random() * words.length)];
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }

        var remainingLetters = word.length;
        var maxGuesses = 10;
        var guessesUsed = 0;

        while (remainingLetters > 0 && guessesUsed < maxGuesses) {
            alert(answerArray.join(" ") + "\nGuesses left: " + (maxGuesses - guessesUsed));

            var guess = prompt("Guess a letter, or click Cancel to stop playing.");
            if (guess === null) break;

            guess = guess.toLowerCase();

            if (guess.length !== 1 || !guess.match(/[a-z]/)) {
                alert("Please enter a single letter");
                continue; // Don't count invalid input as a guess
            }

            guessesUsed++;

            if (word.indexOf(guess) === -1) {
                alert("That letter is not in the word.");
            } else {
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }
        }

        alert(answerArray.join(" "));
        if (remainingLetters === 0) {
            alert("Great job! The word was " + word);
        } else {
            alert("Game Over. The word was " + word);
        }