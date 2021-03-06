// I paired [by myself, Alan Cohen from my Accountability Group:] on this challenge.

<<<<<<< HEAD



// Pseudocode
//  Run a number of tests to see what of a variable is.
// If the value assigned to the variable is false, computer gives an Error along with an error message 
//     predefined in the assert function for that test number.
// Otherwise the answer was true and so print the word true next to the test number
// 


=======
>>>>>>> upstream/master
// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "ariel", "alex","Mary"];






// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Fun challenge.
// Enjoyed going into this not knowing what to expect and then realizing the answer was given right below the function I was trying to figure out.
// I paired up on this challenge and it went very smoothly and rather quick once we got the idea that the function would give is the correct answer.
// 
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

