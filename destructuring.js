// destructuring OBJECT
var expense = {
    type: 'Bussiness',
    amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6
//the name of the variable are to be the same of the property name
const { type, amount } = expense;
console.log(type);
console.log(amount);

console.log("---");

var savedFiled = {
    extension: '.jpg',
    name:'repost',
    size: 14040
};

function fileSummary({ name, extension, size }, { color }) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled, {color: 'red'}));

console.log("---");

// destructuring ARRAY
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

//we have to use the square braces and not the curly braces
//to desctructutre an element we have to use the square braces, to desct a property the curly one
const [ name, name2, name3 ] = companies;
const { length } = companies;
//const firstCompany = companies[0];

console.log(name2);
console.log(length);

// const [ name, name2, ...rest ] = companies;
// facebook, google ... the rest of the element in the array, in this case ubes

console.log("---");

const companiesLocation = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook',  location: 'Menlo Park'},
    {name: 'Uber',  location: 'San Francisco'}
];

const [{location}] = companiesLocation;
console.log(location)

console.log("---");

const Google ={
    locations: ['Mountain View', 'New York', 'London']
}

const {locations: [loc]} = Google;
console.log(loc);

console.log("---");

//you dont have to complain about the order only the same name
function signup({email, password, username, dateOfBirth, city}) {
    // create new user

}

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@exampple.com',
    dateOfBirth: '05/07/1997',
    city: 'Barcelona'
};

signup(user);

console.log("---");

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

const pointsXY = points.map(([x, y]) =>{
    //return {x: x, y: y};
    return {x, y};
})

console.log(pointsXY);

console.log("---");


const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
}

// destructuring
function isEngineer({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(profile));

console.log("---");

// array of array
const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  // array of object subject, time, teacher
const classesAsObject = classes.map(([subject, time, teacher])=>{
    return {subject, time, teacher};
});

console.log(classesAsObject);

console.log("---")

const numbers = [1, 2, 3];

function double([number, ...rest]) {
    if (!number) {
        return [];
    }
    return [2*number, ...double(rest)];
};

console.log(double(numbers));