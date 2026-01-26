
// Create an Array of Players:
var players = [playerA, playerB, playerC];
console.log("Player-Object:", players[0]);

// Accessing Properties within an Object:
console.log("Player-Age:", players[1].age);
// Accessing Nested Arrays within Objects:
console.log("Name:", players[2].name, "and Score-Number", players[2].scoreNumbers[2]);

var playerA = {
    name: "Anna",
    age: 31,
    scoreNumbers: [2, 4, 8, 16]
};

var playerB = {
    name: "Dave",
    age: 21,
    scoreNumbers: [3, 9, 40]
};

var playerC = {
    name: "Kate",
    age: 29,
    scoreNumbers: [1, 2, 3]
};
/