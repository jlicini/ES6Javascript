const colorsArray = ["red", "green", "blue"];
const numbersArray = [1, 2, 3, 4];
let total = 0;

for (const color of colorsArray) {
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

console.log("--");

function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const color = colors();
console.log(color.next());
console.log(color.next());
console.log(color.next());
console.log(color.next());

const myColors = []
for (let color of colors()) {
  myColors.push(color);
}

console.log("--")

//practical use of generatos

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineering: 'Dave',
  testingTeam
};


function* TeamIterator(team){
  yield team.size;
  yield team.manager;
  yield team.engineering;
  const TestingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* TestingTeamGenerator
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (const name of TeamIterator(engineeringTeam)) {
  names.push(name) //iterate in only particolar property
}

console.log(names);