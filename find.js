var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'},
    {name: 'Alex', id: 4},
];

var user;

user = users.find(function(user){
    return user.name === 'Alex';
})

console.log(user)

console.log("----")

function Car(model){
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

findCar = cars.find(function(car){
    return car.model === 'Focus'
})

console.log(findCar)

console.log("----")


var posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old post'},
    {id: 3, title: 'Upcoming post'}
];

var comment = { postId:1, content: 'Great Post'};

function postForComment(posts, comment){
    return posts.find(function(post){
        return post.id = comment.postId
    });
}

console.log(postForComment(posts, comment));

console.log("----")

//find the admin
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin = users.find(function(user){
      return user.admin
  })

  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account = accounts.find(function(account){
      return account.balance === 12
  })

  console.log("----")

  var ladders = [
      {id: 1, height: 20},
      {id: 3, height: 25},
  ]

  function findWhere(array, criteria){
    return array.find(function(element){
        var property = Object.keys(criteria)[0];
        return element[property] === criteria[property];
    })
  }

  console.log(findWhere(ladders, {height: 25}))