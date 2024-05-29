let animals = [
  { name: "Fluffy", species: "rabbit" },
  { name: "Buddy", species: "dog" },
  { name: "Goldie", species: "fish" },
  { name: "Whiskers", species: "cat" },
  { name: "Thumper", species: "rabbit" },
  { name: "Rex", species: "dog" },
  { name: "Bubbles", species: "fish" },
  { name: "Shadow", species: "cat" },
  { name: "Hopper", species: "rabbit" },
  { name: "Spot", species: "dog" },
  { name: "Finley", species: "fish" },
  { name: "Mittens", species: "cat" },
  { name: "Clover", species: "rabbit" },
  { name: "Max", species: "dog" },
  { name: "Splash", species: "fish" },
  { name: "Smokey", species: "cat" },
  { name: "Daisy", species: "rabbit" },
  { name: "Bella", species: "dog" },
  { name: "Nemo", species: "fish" },
  { name: "Tigger", species: "cat" },
  { name: "Cottontail", species: "rabbit" },
  { name: "Charlie", species: "dog" },
  { name: "Swimmy", species: "fish" },
  { name: "Simba", species: "cat" },
  { name: "Hazel", species: "rabbit" },
  { name: "Duke", species: "dog" },
  { name: "Aqua", species: "fish" },
  { name: "Oscar", species: "cat" },
  { name: "Bunny", species: "rabbit" },
  { name: "Bailey", species: "dog" },
  { name: "Coral", species: "fish" },
  { name: "Leo", species: "cat" },
  { name: "Pepper", species: "rabbit" },
  { name: "Molly", species: "dog" },
  { name: "Gill", species: "fish" },
  { name: "Oliver", species: "cat" },
  { name: "Thistle", species: "rabbit" },
  { name: "Rocky", species: "dog" },
  { name: "Fin", species: "fish" },
  { name: "Luna", species: "cat" },
  { name: "Fuzzy", species: "rabbit" },
  { name: "Zoe", species: "dog" },
  { name: "Wave", species: "fish" },
  { name: "Kitty", species: "cat" },
  { name: "BunBun", species: "rabbit" },
  { name: "Riley", species: "dog" },
  { name: "Bubble", species: "fish" },
  { name: "Felix", species: "cat" },
];

const names = animals.map((animal) => {
  return `${animal.name} is a ${animal.species}`;
});

console.log("names:", names);

// const names = animals.map((animal) => animal.name);

// const names = animals.map((animal) => {
//   return animal.name;
// });

// const names = animals.map(function (animal) {
//   return animal.name;
// });

// const names = [];
// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }
