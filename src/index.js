import "./styles.css";

// Example of a VERY simple Monopoly game simulation

// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€
// const squares = [
//   100,
//   -10,
//   0,
//   0,
//   -40,
//   -10,
//   -10,
//   5,
//   0,
//   -10,
//   -50,
//   -10,
//   0,
//   0,
//   -50,
//   -10
// ];

// // --- Initialization ---

// let player1 = {
//   name: "Estelle",
//   color: "black",
//   position: 1,
//   cash: 1000,
//   move: function() {
//     // The dice is a random integer between 1 and 6
//     let dice = 1 + Math.floor(6 * Math.random());
//     // The position is always between 0 and 15 (the numbers of squares - 1)
//     this.position = (this.position + dice) % squares.length;
//     // The cash is updated based on the values of squares and player1.position
//     this.cash += squares[this.position];
//     // If the player doesn't have anymore cash, player is out of game
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo: function() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}€`
//     );
//   }
// };

// let player2 = {
//   name: "Serge",
//   color: "blue",
//   position: 1,
//   cash: 1000,
//   move: function() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo: function() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}€`
//     );
//   }
// };

// let player3 = {
//   name: "Loick",
//   color: "orange",
//   position: 1,
//   cash: 1000,
//   move: function() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo: function() {
//     console.log(
//       `${this.name} is at position ${this.position} and has ${this.cash}€`
//     );
//   }
// };

// console.log(player1);
// console.log(player2);
// console.log(player3);

// player1.move()
// player2.move()
// player3.move()

// player1.move()
// player2.move()
// player3.move()

// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();

//-------------------------------------------------

// A basic JavaScript object with properties and a method
var customer = {
  name: "Tom Smith",
  speak: function() {
    // this allows you to reference a specific objects value
    // without knowing the objects name
    return "My name is " + this.name;
  },
  // Objects can contain other objects
  address: {
    street: "123 Main St",
    city: "Pittsburgh",
    state: "PA"
  }
};

document.write(customer.speak() + "<br />");

// You access properties and object properties like this
document.write(
  customer.name + " lives at " + customer.address.street + "<br />"
);

// You can add properties
customer.address.country = "US";

document.write(customer.address.country + "<br />");

// Creating multiple objects of the same type with Constructor
// Functions. Constructors provide the functions that classes
// provide in other languages
function Person(name, street) {
  // this allows us to refer to an object even though we
  // don't know its name before it is created
  this.name = name;
  this.street = street;
  this.info = function() {
    return "My name is " + this.name + " and I live on " + this.street;
  };
}

// You call constructor functions with new
var bobSmith = new Person("Bob Smith", "234 Main St");

document.write(bobSmith.info() + "<br />");

// instanceof tells you if an object is of a certain type
document.write("Bob is a person : " + (bobSmith instanceof Person) + "<br />");

// You can pass an object to a function and change values
function changeName(person) {
  person.name = "Sue Smith";
}
changeName(bobSmith);
document.write("Bob became " + bobSmith.name + "<br />");

// Objects are only equal if they reference the same object
var person1 = new Person("Paul", "123 Main");
var person2 = new Person("Paul", "123 Main");

document.write("Are they equal " + (person1 === person2) + "<br />");

// ---------- PROTOTYPE ----------
// Every function has a prototype property that contains an object
// You can add properties and methods to the prototype object
// and then when you call for them to execute they are used
// just as if they belonged to the object

function getSum(num1, num2) {
  return num1 + num2;
}

// Get the number of function arguments
document.write("Num of arguments : " + getSum.length + "<br />");

// You can add properties and methods to this object
function Mammal(name) {
  this.name = name;
  this.getInfo = function() {
    return "The mammals name is " + this.name;
  };
}

// Use prototype to add a property
Mammal.prototype.sound = "Grrrrr";

// Use it to add a method
Mammal.prototype.makeSound = function() {
  return this.name + " says " + this.sound;
};

var grover = new Mammal("Grover");

document.write(grover.makeSound() + "<br />");

// List all properties of an object
for (var prop in grover) {
  document.write(prop + " : " + grover[prop] + "<br />");
}

// Check which property belongs to prototype vs. the object grover
document.write(
  "name Property of Grover : " + grover.hasOwnProperty("name") + "<br />"
);

document.write(
  "sound Property of Grover : " + grover.hasOwnProperty("sound") + "<br />"
);

// You can add methods to built in JS objects
Array.prototype.inArray = function inArray(value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

var sampArray = [1, 2, 3, 4, 5];

document.write("3 in array : " + sampArray.inArray(3) + "<br />");

// ---------- PRIVATE PROPERTIES ----------
// All properties in an object are public in that any function can modify or delete these properties.
// You can make properties private by declaring them as variables in a constructor

function SecretCode() {
  // This value can't be accessed directly
  var secretNum = 78;

  // This function can access secretNum
  this.guessNum = function(num) {
    if (num > 78) {
      return "Lower";
    } else if (num < 78) {
      return "Higher";
    } else {
      return "You Guessed It";
    }
  };
}

var secret = new SecretCode();

// Returns undefined
document.write("Value of secretNum : " + secret.secretNum + "<br />");

document.write("Is 70 the number : " + secret.guessNum(70) + "<br />");

// Even if we add another function it can't access the secretNum
SecretCode.prototype.getSecret = function() {
  return this.secretNum;
};

document.write("The secret number is " + secret.getSecret() + "<br />");

// ---------- GETTERS AND SETTERS ----------
// Getters and Setters can protect data, or provide useful ways to set its value
// I'll show you a bunch of getters and setters you may come in contact with
var address = {
  street: "No Street",
  city: "No City",
  state: "No State",

  // Provides styled data all at once
  get getAddress() {
    return this.street + ", " + this.city + ", " + this.state;
  },

  // Allows the user to set 3 values with 1
  set setAddress(theAddress) {
    var parts = theAddress.toString().split(", ");
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.state = parts[2] || "";
  }
};

address.setAddress = "123 Main St, Pittsburgh, PA";
document.write("Address : " + address.getAddress + "<br />");
document.write("City : " + address.city + "<br />");

// --------CONSTRUCTOR GETTERS AND SETTERS -------
// Still used even though it is (Deprecated)
function Coordinates() {
  this.latitude = 0.0;
  this.longitude = 0.0;
}

// Define the getter with the prototype to assign it to with
// the property name and the getter function
Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function() {
  return "Lat : " + this.latitude + " Long: " + this.longitude;
});

// Define the setter with the prototype to assign it to with
// the property name and the setter function
Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(
  coords
) {
  var parts = coords.toString().split(", ");
  this.latitude = parts[0] || "";
  this.longitude = parts[1] || "";
});

var testCoords = new Coordinates();

testCoords.setCoords = "40.71, 74.00";

document.write("Coordinates : " + testCoords.getCoords + "<br />");

document.write(+"</br>");

// let person = {
//   firstName: "Chuck",
//   lastName: "Norris",
//   birthDate: new Date("1940-03-10"),
//   jokes: [
//     "Chuck Norris counted to infinity... Twice.",
//     "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis"
//   ],
//   displayInfo: function() {
//     console.log(
//       `My name is ${this.firstName} ${this.lastName} and I have ${
//         this.jokes.length
//       } jokes!`
//     );
//   },
//   getAge: function() {
//     let today = new Date()
//     let todayDate = Date.now(today)
//     let age = today - this.birthDate;
//     this.age = new Date(age);
//     console.log(this.birthDate);
//     console.log(today);
//     console.log(age);
//     console.log(todayDate);
//     console.log(person.age)

//     var seconds = parseInt(19400310, 10);

//     var days = Math.floor(seconds / (3600 * 24));
//     seconds -= days * 3600 * 24;
//     var hrs = Math.floor(seconds / 3600);
//     seconds -= hrs * 3600;
//     var mnts = Math.floor(seconds / 60);
//     seconds -= mnts * 60;
//     console.log(
//       days +
//         " days, " +
//         hrs +
//         " Hrs, " +
//         mnts +
//         " Minutes, " +
//         seconds +
//         " Seconds"
//     );
//   },
//   addJoke: function() {
//    this.jokes.push()
//   },
//   getRandomJoke: function() {
//     // TODO
//   }
// };

// console.log(person);
// person.getAge();

// //console.log('getAge', person.getAge()) ; // Should return 79 if you are in 2019

// //person.addJoke('Chuck Norris can divide by zero.');
// //console.log('getRandomJoke', person.getRandomJoke());
// // person.addJoke('Chuck Norris kills flies with his gun.');
// // console.log('getRandomJoke', person.getRandomJoke());
// // person.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
// // console.log('getRandomJoke', person.getRandomJoke());

// //person.displayInfo();

// document.getElementById("app").innerHTML = `<h1>Hello you</h1>
// <div>$$$</div>`;
