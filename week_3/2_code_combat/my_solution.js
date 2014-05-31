// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 Rescue Mission

// This is your code controlling Tharin!

this.moveDown();	/ Move Down
this.moveDown();	/ Move Down
this.moveRight();	/ move Right
this.moveUp();		/ Move Up
this.moveUp();		/ Move Up
this.moveRight();	/ Move Right
this.moveRight();	/ Move Right
this.moveDown();	/ Move Down
this.moveDown();	/ Move Down
this.attackNearbyEnemy();  / Kill the enemy
------------------------------

Grab A Mushroom

// Tharin might consider taking a detour after line 3.

this.moveUp();		/Move Up
this.moveRight();	/Move Right
this.moveLeft();	/Move Left
this.moveLeft();	Move Left
this.moveUp();		/Move Up

this.attackNearbyEnemy(); / Kill Enemy

-----------------------------------



Drink Me

this.moveRight();		/Move Right
this.attackNearbyEnemy();	/Kill Enemy
this.moveRight();		/ Move Right
this.moveDown();		/ Move Down
this.moveUp();			/ Move Up
this.moveRight();		/ Move Right
this.attackNearbyEnemy();	/ Kill Enemny
------------------------------


Taunt The Guards

// Tharin might consider taking a detour after line 3.

this.moveUp();		/ Move Up
this.moveRight();	/ Move Right
this.moveLeft();	/ Move Left
this.moveLeft();	/ Move Left
this.moveUp();		/ Move Up

this.attackNearbyEnemy(); / Kill the enemy

--------------------------------------

It's A Trap

// Taunt the Ogre and run for cover!
 this.moveDown();	/ move down
 this.moveDown();	/ move down
 this.say("Hey.")	/ speak the word hey
 this.moveUp();		/ move up
 this.moveUp();		/move up


---------------------------------------

Break the Prison
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")		/ if prisoner's name is William 
    return true;		/ break down the door

if(name === "Krogg")		/ if prisoner's name is Krogg
    return false;  		/ don't break the door
    
    if(name === "Lucas")	/if prisoner's name is Lucas
    return true;		/ free them
        if(name === "Robert")	/if prisoner's name is Robert
    return true;		/ free them
       if(name === "Marcus")	/if prisoner's name is Marcus
    return true;		/ free them
if(name === "Brack")		/If prisoner's name is Brack
    return false;  // 		/ Do not free them
if(name === "Gort")		/If prisoner's name is Gort
    return false;  //		/ Do not free them
    if(name === "MARCUS")	/If prisoner's name is MARCUS
    return false;  // 		/ do not free them

return true;




------------------------------------------
Taunt

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Die Now!");		/say the words Die Now
this.say("Die Twice as hard!"); / Say the words Die Twice as hard
this.say("Die Die Now!");	/ say the words Die Die Now
this.say("Die Forever!");	/ Say the words Die forever


------------------------------------------
Cowardly Taunt
//this.moveXY(50, 16);
//this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.

// Say something!

// Then run back behind the arrow towers for safety.

// You can shift+click on the map to insert coordinates. 

this.moveXY(50,33);  / Move the player to the X co-ordinate of 50 and Y co-ordinate of 33
this.say("Hey!"); 	/ Say the word Hey!
this.moveXY(70,10)	/ move the player to X co-ordinate 70 and Y co-ordinate 10


------------------------------------------
Commanding Followers


this.moveXY(49, 66);	/ move the player to X co-ordinate 49 and Y co-ordinate 66
this.moveXY(60, 63);	/ move the player to X co-ordinate 60 and Y co-ordinate 63
this.moveXY(75, 63);	/ move the player to X co-ordinate 75 and Y co-ordinate 13
this.say("Hail, friends!"); 	/ say the words Hail friends!

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!
this.say("Follow me!")	/ say anything with the words follow
this.moveXY(66, 45);	/ move the player to X co-ordinate 66 and Y co-ordinate 45
this.say("Attack!")	/ say anything with the words attack

------------------------------------------
Mobile Artillery

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(50,43);	/ move the player to X co-ordinate 50 and Y co-ordinate 54
this.attackXY(69,54);	/ move the player to X co-ordinate 69 and Y co-ordinate 54
this.attackXY(63,50);	/ move the player to X co-ordinate 63 and Y co-ordinate 50
this.attackXY(48,68);	/ move the player to X co-ordinate 48 and Y co-ordinate 68
this.attackXY(49,53);	/ move the player to X co-ordinate 49 and Y co-ordinate 53

------END of Pseudo Code----------------------------------------------------------------------

What does this refer to?
In JS programming this is calling on whatever object it happens to be inside. Objects come with methods and properties
and so instead of calling on the object name and saying, for instance, player.moveRight, we can reference the object 
we are inside with the word this. Once inside of an object JS knows this is referencing the object we are inside of.

What does the () in JS do?
Looks like () is calling a predefined function that hasn't been given any arguments.
In times the fighter needed to move to specific points the functions took X and Y co-ordinates inside the parentheses.
Semicolons are there to let the computer know that the command in the fuction has eneded and it needs to go to the next line.
 
 
 
 
 
 
// Reflection:
// Write your reflection here.

So far I've leanred that Javascript is an object oriented language. Objects come with properties and methods.
Methods can include moving and the player in Code Comabt is an object with color properties which I could customize 
for him. The player also had movments that were predefined in functions such as moveRight() or moveDown(). 
The player coldn't move diagonally. A function for "movediagonalLeftUp" for example wasn't made and so the player 
couldn't make that move. 
Also, so far I've seen arguments given to the fuction. Arguments are specific values that the function uses to
execute its code.




'
