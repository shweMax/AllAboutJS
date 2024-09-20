// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
// if(age<21){
//   console.log("You can not enter the club!")
// }
// else{
//   console.log("Welcome!")
// }

// -----------------------------------------------------------

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
// if(age<100){
//   console.log("Not elegible!")
// }
// else if(age===100){
//   console.log("Here is your birthday card from the King!")
// }
// else{
//   console.log("Not elegible, you have already gotten one")
// }
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
let experience = [
  "CEO at Scrimba",
  "Frontend developer at Xeneta",
  "People counter for Norstat",
];

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);
// console.log(experience.length);

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
let allAboutMe = ["Anna", 21, true];
// console.log(allAboutMe[1]);

////////////////////////////////
let cards = [7, 4];
cards.push(6);
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here!";
let newMsg = messages.push(newMessage);
console.log(messages);

messages.pop();
console.log(messages);
