const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "🥔");

// Styled
console.log(
  "%c I am some great text!",
  "background-color: blue;color: white; font-family: Arial; font-size: 25px; font-weight: bold; border: 2px solid white; border-radius: 2px; padding: 0.2em"
);

// warning!
console.warn("Oh no! Warning!");

// Error :|
console.error("Ups an error occurred :C");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/oconsl")
  .then((data) => data.json())
  .then((json) => {
    console.timeEnd("fetching data");
    console.log(json);
  });
