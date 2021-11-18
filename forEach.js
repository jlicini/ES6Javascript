var colors=['red','blue','green'];

console.log("FOR LOOP")
for(var i=0; i<colors.length; i++){
	console.log(colors[i]);
}

console.log("----------")

console.log("FOR EACH")
colors.forEach(function(color){
    console.log(color);
})

console.log("----------")

//create an array of numbers
var numbers = [1,2,3,4,5];

//create a variable to hold sum
var sum = 0;
//loop over the array, incrementing sum variable
// numbers.forEach(function(number) {
//     sum+=number
// });

//es equivalente a 
function adder(number){
    sum += number;
}

numbers.forEach(adder)

// print sum variable
console.log(sum);

console.log("-----EXERCISE-----")
console.log("moving away from for loops")

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    // for (var i = 0; i < posts.length; i++) {
    //   console.log(posts[i]);
    // }

    posts.forEach(element => {
        console.log(element)
    });
}

handlePosts();


var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];


var areas = [];

images.forEach(function(image) {
    areas.push(image.height * image.width)
}); 

areas.forEach(function(area) {
    console.log(area)
});