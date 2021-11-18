//array of obj
var products=[
{name: 'cocumber', type:'vegetable', quantity: 0, price: 1},
{name: 'banana', type: 'fruit', quantity: 10, price: 15},
{name: 'celery', type: 'vegetable', quantity: 30, price: 9},
{name: 'orange', type: 'fruit', quantity: 3, price: 5},
];

var fileredProducts = [];

// for (let i = 0; i < products.length; i++) {
//     if(products[i].type === 'fruit'){
//         fileredProducts.push(products[i]);
//     }
// }

// console.log(fileredProducts);

fileredProducts = products.filter(function(product){
    return product.type === 'vegetable'; //return true or false value, if you dont put retun the value is undefined
})

console.log(fileredProducts)

console.log("--------")

//Type is 'vegetable, quantity is greater than 0, price is less than 10

fileredProducts = products.filter(function(product){
    return product.type === 'vegetable' 
    && product.quantity > 0 
    && product.price < 10
})

console.log(fileredProducts)

console.log("--------")

//return a list with the comment associate with the post
var post = {id:4, title: 'new post'}
var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
]

function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    })
}

console.log(commentsForPost(post, comments))

console.log("--ejercicios---")

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
})

console.log("---------")

var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
var filteredUsers = users.filter(function(user){
    return user.admin; //return true
})

console.log(filteredUsers);

console.log("---")

var numbers = [10, 20, 30]
function reject(numbers, iteratorFunction) {
        return numbers.filter((element) => {
        return !iteratorFunction(element);
    });
};

var lessThenFifteen = reject(numbers, function(number){
    return number >15;
});

console.log(lessThenFifteen);