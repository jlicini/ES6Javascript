var computers = [
    {name: 'Apple', ram:24},
    {name: 'Compaq', ram:4},
    {name: 'Acer', ram:32},
]

var computersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

// todos los computer tienen 16 gb de ram
computersCanRunProgram = computers.every(function(computer){
    return computer.ram > 16 // true && false && true = false &(and)
})

onlySomeComputersCanRunProgram = computers.some(function(computer){
    return computer.ram > 16 // true || false || true = true ||(or)
})

console.log(computersCanRunProgram)
console.log(onlySomeComputersCanRunProgram)

console.log("---")

var names = [
    'alexandria',
    'matthew',
    'joe'
];

allNamesMoreThan4 = names.every(function(name){
    return name.length > 4
})

someNamesMoreThan4 = names.some(function(name){
    return name.length > 4
})

console.log(allNamesMoreThan4)
console.log(someNamesMoreThan4)

console.log("---")

function Field(value){
    this.value = value
}

// Field.prototype.validate = function(){
//     return this.value.length > 0
// }

var username = new Field("2cool");
var password = new Field("my_password");
var birthday = new Field('10/10/2010')

// console.log(username.validate())

// var fields = [username, password, birthday]

// var formIsValid = fields.every(function(field){
//     return field.validate()
// })

// (formIsValid)? 'is valid' : 'nos valid'

console.log("---")

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted = users.every(function(user){
      return user.hasSubmitted
  })

  console.log(hasSubmitted)

  console.log("--")

  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(req){
      return req.status === 'pending'
  })