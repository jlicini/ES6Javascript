// cost value never change
// let value change over time

// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

// ES6
const nameEmp = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// some time leter ...
title = 'Senior Software Engineer'
hourlyWage = 60;

console.log(nameEmp, title, hourlyWage)

console.log("---")

function count(targetString) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0

    for (let i = 0; i < targetString.length; i++) {
        if(characters.includes(targetString[i])) number++ 
    }

    return number
}

count('shfsjhbfsfs')

console.log("---")

const name = 'Anna';
let age = 24;
const dateOfBirth = '24/07/1997';

console.log("---")

const statuses = [ 
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
  ];
  let message = '';
  const currentCode = 'OK';

  for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
      message = statuses[i].response;
    }
  }