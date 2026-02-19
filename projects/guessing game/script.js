let secret =  Math.floor(Math.random() * 20) + 1; 

while (true) { 

    let guess = parseInt(prompt("Please guess the secret number (1-20)"));

    if (guess === secret) { 
        alert("Correct Guess!");
        break;
    } else if (guess < secret) { 
        alert("Incorrect, too low");
    } else {
        alert("Incorrect, too high");
    }
}