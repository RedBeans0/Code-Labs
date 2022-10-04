let numbers = [5,2,8,3,12,0,4]

function findlrgNumber() {
return Math.max.apply(null, numbers)
}

console.log(findlrgNumber(numbers)) // = 12