var numbers = [1,2,3];
var doubleNumbers=[];

for (let i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i]*2);
}

//sirve para crear un nuevo array sin mutar el existentes
var doubled = numbers.map(function(number){
    return number * 2; //si no haces return no pone nada en el array, regresa [null,null.null]
})

console.log(doubled);
console.log(doubleNumbers);

console.log("--------")

var cars=[
    {model: 'buick', price: 'cheap'},
    {model: 'camaro', price: 'expemsive'}
]

var prices = cars.map(function(car){
    return car.price
})

console.log(prices)

console.log("----EXERCICE----")
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height
})

console.log(heights)

console.log("----")

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds=trips.map(function(trip){
    return trip.distance / trip.time;
});

console.log(speeds)

console.log("----")

function pluck(array, property) {
    return array.map(function(element){
        return element[property]
    })
}

var paint = [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}]
console.log(pluck(paint, "color"))