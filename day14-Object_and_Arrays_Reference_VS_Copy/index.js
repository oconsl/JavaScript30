// start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;
console.log(age1, age2);
age1 = 200;
console.log(age1, age2);

let name1 = "Santiago";
let name2 = "Luis";
console.log(name1, name2);
name1 = "Bruno";
console.log(name1, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = "Lux";

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
console.log(players, team2);

team2[3] = "Draven";

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.number = 99;

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { numer: 99 });

// We will hopefully soon see the object ...spread
const captain3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
