var numbers = [10, 20, 30]
var sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; 
// }

//initial value is 0, 
//first interection sum = 0 and number = 10
//second interection sum = 10 and number = 20
//third sum = 30nand number = 30
sum = numbers.reduce(function(sum, number){
    return sum + number;
}, 0);

console.log(sum)

var primaryColors = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'}
];

var result = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color)
    return previous
}, [])

console.log(result)

console.log("---")

function balancedParens(string) {
    return string.split("").reduce(function (previous, char) {
        if (previous < 0) return previous
        if (char === "(") return ++previous
        if (char === ")") return --previous
        return previous;
    }, 0)
}

console.log((balancedParens("((((") === 0)? 'true' : 'false' )
console.log((balancedParens("()()()()") === 0)? 'true' : 'false' )
console.log((balancedParens(")(") === 0)? 'true' : 'false' )

console.log("---")

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function (prev, trip) {
    return prev + trip.distance
}, 0)

console.log(totalDistance)

console.log("---")

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(sum, desk) {
      (desk.type === 'sitting') ? sum.sitting++: sum.standing++
      return sum
  }, { sitting: 0, standing: 0 });

  console.log(deskTypes)

  console.log("---")

  var numbers = [1, 1, 2, 3, 4, 4]

  function unique(numbers) {
       return numbers.reduce(function (prev, element) {
            if (!findNumber(prev, element)) prev.push(element) 
            return prev
      }, [])
  }

  function findNumber(prev, element) {
    return prev.find(function (number) {
        return number === element;
    });
  }
  
  console.log(unique(numbers));