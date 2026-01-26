//Array of friends:
// Define the Friend Objects
//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
var friends = [
    {
        name: "cole",
        age: 31,
        scoreNumbers: [2, 4, 8, 16]
    },
    {
        name: "Dave",
        age: 15,
        scoreNumbers: [3, 9, 40]
    },
    {
        name: "Kate",
        age: 29,
        scoreNumbers: [1, 2, 3]
    },

    {
        name: "Lee",
        age: 20,
        scoreNumbers: [30, 10, 3]
    }
];

// Accessing Objects in the Array:
console.log("Friend-Object:", friends[1]);

//Accessing Properties within an Object:
console.log("Friend-Age:", friends[2].age);

// Accessing Nested Arrays within Objects:
console.log("Name:", friends[1].name, "and Score-Number", friends[2].scoreNumbers[3]); 