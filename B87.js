var randomBodyParts = ["Toes", "Armpit", "Ears"];
var randomAdjectives = ["Smelly", "horrible", "wreacked"];
var randomWords = ["sister", "Neighbour", "Mouse", "Monkey", "Rat", "dog"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adje
// ctive from the randomAdjectives array: 
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() *randomWords.length)];

// Join all the random strings into a sentence:
// Build the insult sentence using join

var randomInsult = [ "Your",randomBodyPart,"is","like","a", randomAdjective, randomWord + "!!!"].join(" ");


console.log(randomInsult);



