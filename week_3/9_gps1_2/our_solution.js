// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Ariel Olin
//  2. Audrey McGowan


// 0. "YOU SIGNED... WHO?!"
Adam Sandler
Matt Damon
Shooter McGavin

// 1. "Here they Come!"
var adam = {
  name:"Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?"
};

var kristen = {
  name:"Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};

var jim = {
  name: "Jim Carrey",
  age: 52,
  quote:"...So you're telling me there's a chance? YEAH!"
};

console.log(jim.quote);
console.log(kristen.age);
console.log(adam.name);





// 2. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client (name, age, quote) {
  this.name=name;
  this.age=age;
  this.quote=quote;
}



var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var mattDamon = new Client("Matt Damon", 43, "It's better to be a fake somebody than a real nobody.");
var shooterMcGavin = new Client("Shooter McGavin", 47, "Just stay out of my way... or you'll pay. Listen to what I say.");



// 3. "SHOW 'EM OFF!"

Console.log(shooterMcGavin.quote);
Console.log(adamSandler.age);
Console.log(mattDamon.name);




// 4. "But wait, there's more!"

function Client (name, age, quote, showQuote) {
  this.name=name;
  this.age=age;
  this.quote=quote;
  this.showQuote=console.log(quote);
}


// 5.  ** BONUS **
function Client (name, age, quote, project, showQuote) {
  this.name=name;
  this.age=age;
  this.quote=quote;
  this.project=project;
  this.showQuote=console.log(quote);
}



var adamSandler = new Client("Adam Sandler", 47, "Big Daddy", "So you're telling me there's a chance? YEAH!");
var mattDamon = new Client("Matt Damon", 43, "Borne Identity", "It's better to be a fake somebody than a real nobody.");
var shooterMcGavin = new Client("Shooter McGavin", 47, "Untitled", "That's your home! Are you too good for your home?");



//  6.  Your Reflection:
Not Sure if these are correct. I partnered up with someone who knew more than I did. I originally wanted the Release 4 answer to be:
function showQuote() {
console.log(adamSandler.quote);
}
But that wouldn't have taken the property of the Object, that just creats a function, it was Audrey's idea to add a fourth parameter to the function.
For the Bonus we added a fifth parameter called "project" and assigned title properties that the actors had worked on. 

We worked well together on the challenge. JavaScript is still confusing.
