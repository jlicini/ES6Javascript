const colors = ["red", "green", "blue"];
const numbersArray = [1, 2, 3, 4];
let total = 0;

for (const color of colors) {
  console.log(color);
}

for (const number of numbersArray) {
  total += number;
}

//what is a generator?
//a function that can be entered and execute multiple times

//by adding * we create generator
function* shopping() {
  //stuff on the side walk

  //walking down the sidewalk

  //go into the store with cash
  const stuffFromStore = yield "cash";
  // walking into laundry
  const cleanClothes = yield "laundry";

  //walking back home
  return stuffFromStore, cleanClothes;
}

//stuff in the store
const gen = shopping();
console.log(gen.next()); //leaving our house
//walked inot the store
//walking up and down...
//purchase our stuff
console.log(gen.next("groceries")); //leaving store with groceries
console.log(gen.next("clean clothes"));
