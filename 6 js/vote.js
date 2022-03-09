// Write a JS script that logs in the console if you can vote or not depending on your age.
// Improve this script by adding the condition that if you are more than 21,
// you can be elected as President.

// Pseudocode:
// prompt user's age input
// if age < 18 user can't vote
// else if age > 21 user can vote and be elected as president
// else user can vote

var age = window.prompt("What is your age?");
document.write("Hey, do you like being " + age + " years old?");
if (age < 18) {
  console.log("You can't vote...");
}
else {
  console.log("You can vote!");
}
if (age > 21) {
  alert("You can also be elected president!");
}
