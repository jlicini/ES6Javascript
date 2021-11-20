//sum all the numbers in array use reduce 
//we have to pass the arguments as a single array
// ... it is REST operator, that's mean idk how many argument i have, but we want to put in a single array
function addNumbers(...numbers) {
    return numbers.reduce((sum, number)=>{
        return sum + number;
    }, 0)  
}

console.log(addNumbers(1,2,3,4,5,6,7));
console.log(addNumbers(10,45,9));

const defaultColors = ['red', 'green'];
const userFavColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

//console.log(defaultColors.concat(userFavColors));

// we can use instaed a new array
// ...defaultColors we generate a new array and with ...userFavColors create another array 
// result [ 'red', 'green', 'orange', 'yellow' ]
// if we d write [...defaultColors, userFavColors] the result would be [ 'red', 'green', ['orange', 'yellow']]
const colors = [...defaultColors, ...userFavColors];

console.log(colors);

console.log(['blue',...fallColors,...defaultColors, ...userFavColors]); //spread op.

function validateShoppingList(...items) {
    if (items.indexOf('milk')<0) return ['milk', ...items];
    return items;
}

validateShoppingList('orange', 'breads', 'eggs');

const MathLibrary = {
    calculateProduct (...rest){
        console.log('Please use the multiply method instead')
        return this.multiply(...rest)
    },
    multiply (a, b){
        return a * b;
    }
}

console.log(MathLibrary.calculateProduct(2, 4, 5));

console.log("--exercise--")

function product(...numbers) {
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
}

function join(array1, array2) {
    return [...array1, ...array2]
}

function unshift(array, ...letters) {
    return [...letters, ...array];
}