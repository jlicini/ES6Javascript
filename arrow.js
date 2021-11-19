// const add = function (a, b) {
//     return a + b
// }

// const add = (a, b) => {
//     return a + b
// }

// if i have a single expression we dont have to use {}
const add = (a, b) => a + b

const newSum = add(1,2);

console.log(newSum)

console.log("--")

//if we have a single argument we can also omit de perens around it
const double =  number =>  2 * number;

const newNumber = double(4);

console.log(newNumber);

const numbers = [1,2,3]

// we can compact this function by delete perens and add arrow
// numbers.map(function (number) {
//     return number * 2;
// })

// result =>
numbers.map(number => number * 2)

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'SuperSquad',
    //the value of this when the funcion is call is lost
    //the possible solution are to use .bind(this) or create a var sel = this inside the function() or we can use arrow function
    //when we use arrow this is refer to team no this inside the function
    teamSummary: function(){
        return this.members.map( (member) => {
            return `${member} is on tema ${this.teamName}`
        });
    }
};

console.log(team.teamSummary())

console.log("--")

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const profile = {
    name: 'Alex',
    getName: function () {
        return this.name;
    }
};

console.log(profile.getName())