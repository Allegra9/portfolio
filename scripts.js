$(document).ready(function() {
    // all custom jQuery will go here
});




function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  var result = "I look like a " + myAdjective + " " + myNoun + " and I can also " + myVerb + " " + myAdverb;
  // Your code above this line
  return console.log(result);
}
// Change the words here to test your function
wordBlanks("Kitty", "big", "code", "so damn well");



var sandwich = ["peanut butter", "jelly", "bread"]
console.log(sandwich);


var myArray = [1,2,3];
myArray[0]= 3;
console.log(myArray);
//prints: [3,2,3]



var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

console.log(myArray[2][1], myArray[3], myArray[3][0], myArray[3][0][1]); //equals 8
//arr[3]; // equals [[10,11,12], 13, 14]
//arr[3][0]; // equals [10,11,12]
//arr[3][0][1]; // equals 11



var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
console.log(myArray);
//prints: [["John", 23], ["cat", 2],["dog",3]]


var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);
//prints: ["John", 23]


//GAME:

//var myNoun = prompt("Choose a noun");
//var myAdjective = prompt("Choose an adj");
//var myVerb = prompt("Choose a verb");
//var myAdverb = prompt("Choose an adverb");

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

  var result = "I look like a " + myAdjective + " " + myNoun + " and I can also " + myVerb + " " + myAdverb;

  return console.log(result);
}
wordBlanks("Kitty", "big", "code", "so damn well");
//wordBlanks(myNoun, myAdjective, myVerb, myAdverb);



//CELCIUS TO FAHRENHEIT CONVERTER:

//var celsius = prompt("Enter Celsius degrees");

function convertToF(celsius) {
   var fahrenheit = (celsius * (9/5)) + 32;

  return console.log(fahrenheit);
}
//convertToF(celsius);
convertToF(-30);



//FAHRENHEIT TO CELSIUS CONVERTER:

//var fahrenheit = prompt("Enter F degrees");

function convertToC(fahrenheit) {
   var celsius = (fahrenheit -32)*(5/9);

  return console.log(celsius);
}
//convertToC(fahrenheit);
convertToC(86);



// Postfix 
var x = 3;
y = x--; // y = 3, x = 2
console.log(x,y);

// Prefix
var a = 2;
b = --a; // a = 1, b = 1
console.log(a,b);


// Postfix 
var x = 3;
y = x++; // y = 3, x = 4
console.log(x,y);

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3
console.log(a,b);

//unary negation operator can convert non-numbers into a number
var x = "4";
y = -x; // y = -4
console.log(x,y);


// Example
var ourStr = "I come first. ";
ourStr += "I come second. ";
ourStr += "I will come too! "
console.log(ourStr);
//prints: I come first. I come second.


var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective
console.log(ourStr);
console.log(ourStr.length);
//prints the whole sentence


var firstName = "Charles"
console.log(firstName[firstName.length - 1]);
//will print the last letter which is 's'
console.log(firstName[firstName.length - 2]);
//will print the second letter from the end which is 'e' in this case


var myArray = [0];
myArray.push(1);
myArray.push(2);
myArray.push(4);
console.log(myArray);
////prints: [0,1,2,4]
myArray.pop();
console.log(myArray);
//prints: [0,1,2]


// Setup
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(myArray);


var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
console.log(myArray);



function functionWithArgs(x,y) {
  console.log(x + y);
}
functionWithArgs(1,2);



// Prefix
var a = 2;
b = ++a; // a = 3, b = 3
console.log(a,b);


//var num = prompt("Enter number");
function timesFive(num) {
  console.log(num * 5);
}
timesFive(5);
//timesFive(num);
//prints: 25, if entered 5 


var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);
//prints: 2



function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}
// Test Setup
var testArr = [1,2,3,4,5];
// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
//prints: Before: [1,2,3,4,5]  1  After: [2,3,4,5,6]



//var val = prompt("Guess a number!");
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  console.log(result);
}
testElse(4);
//testElse(val);


//var expr = prompt("What would you like today?");
var expr = "Oranges";
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
console.log("Is there anything else you'd like?");


function isLess(a, b) {
    console.log(a < b);
}
// Change these values to test
isLess(10, 15);
//prints: true 



function abTest(a, b) {
  if (a < 0 || b < 0) {
   console.log(undefined);
  }
  console.log(Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)));
}
// Change values below to test your code
abTest(2,2);
//prints: 8



//COUNTING CARDS 
var count = 0;
function cc(card) {
  
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0){
    console.log(count + " Bet");
  } else {
    console.log(count + " Hold");
  }
    
}
cc(2); cc(3); cc(7); cc('K'); cc('A');


//Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};
myDog.name = "Happy Coder";
//console.log(myDog);
//console.log(myDog.name);



// Setup
function phoneticLookup(val) {
  var result = "";
    
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
    
  result = lookup[val];
  console.log(result);
}
// Change this value to test
phoneticLookup("charlie");



var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true
  },
  {
    "artist": "Linkin Park",
    "title": "One More Light",
    "release_year": 2017,
    "formats": [
      "digital",
      "Spotify"],
    "amazing": true
  }
];
//console.log(myMusic);



// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
//var gloveBoxContents = myStorage.car.inside["glove box”];
//console.log(gloveBoxContents);
//something doesnt work here above
                                            

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);



//REVERSE STRING 
function solution(str){
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}
solution('world');



function solutions(str){
  console.log(str.split('').reverse().join(''));  
}
solutions('world');




// FOR LOOP to make an array w push:
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);
//prints: [1,2,3,4,5]


//VARIATION:
var myArray = [];
for (var i = 1; i < 6; i+=2) {
  myArray.push(i);
}
console.log(myArray);
//prints: [1,3,5]


//VARIATION:
var myArray = [];
for (var i = 1; i < 60; i+=10) {
  myArray.push(i);
}
console.log(myArray);
//prints: [1,11,21,31,41,51]



var arr = [10,9,8,7,6];
for (var i=0; i < arr.length; i++) {
   console.log(arr[i]);
}




// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);
//prints:42


// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);
//prints: 20


//NESTED ARRAYS:
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}



function multiplyAll(arr) {
  var product = 1;
   for (var p = 0; p < arr.length; p++) {
     for (var s=0; s < arr[p].length; s++) {
   console.log(product *= arr[p][s]);
   }
   }
  console.log(product);
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
//prints: 5040 
multiplyAll([[1],[2],[3]]);
//prints: 6
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]);
//prints: 54



//WHILE LOOP
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);




//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];



//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
    for (i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === firstName) {
        if (contacts[i].hasOwnProperty(prop)) {
          console.log(contacts[i][prop]);
        } else if (contacts[i].firstName !== firstName) {
          console.log("No such contact");
        } else if (contacts[i].hasOwnProperty(prop) !== prop) {
            console.log("No such property");
        } else {
            console.log("I don't know what else");
        }
      }
    }
}
// Change these values to test your function
lookUpProfile("Akira", "likes");
//works, prints array of likes
lookUpProfile("Akira", "address");
//works, prints: No such property
lookUpProfile("Kristian", "lastName");
//prints: Vos 
lookUpProfile("Sherlock", "likes");
//works, prints array of likes
lookUpProfile("Harry","likes");
//works, prints array of likes
lookUpProfile("Bob", "number");
//DOESN'T WORK - WHY?
lookUpProfile("Akira", "address");
//works, prints: No such property

//WHY THAT ONE DOESNT WORK?????????


//MATH.RANDOM
function randomFraction() {
  // Only change code below this line.
  var result = 0;
  // Math.random() can generate 0. We don't want to return a 0, so keep generating random numbers until we get one that isn't 0
  while (result === 0) { 
    result = Math.random();
  }
  console.log(result);  
  // Only change code above this line.
}
randomFraction(0.1);


var seven = Math.floor(Math.random() * 20);
console.log(seven);
//prints a random whole number between 0 and 19


  var five = Math.floor(Math.random() * 10);
  console.log(five);
//prints a random whole number between 0 and 9



function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(1, 9));




// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
console.log(softwareCount);
//prints: 1 (mention)

var expression = /and/gi;  
// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;

console.log(andCount);
//prints: 2 (which means it has been mentioned 2 times)



//DIGITAL SELECTOR: 
var testString = "There are 3 cats but 4 dogs.";

var expression = /\d+/g;  

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;

console.log(digitCount);
//prints: 2



// FINDS WHITE SPACES count:

var testString = "How many spaces are there in this sentence?";
var expression = /\s+/g; 
// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;

console.log(spaceCount);
//prints: 




// NON SPACE COUNT:

var testString = "How many non-space characters are there in this sentence?";

var expression = /\S/g;

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;

console.log(nonSpaceCount);
//prints: 49














