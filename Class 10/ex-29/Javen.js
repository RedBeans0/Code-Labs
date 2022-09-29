let numbers = [5,2,8,3,12,0,4]
Var = largest = numbers[0];
function findLargestNumber(arr){
  // Build your logic here
  for (var i = 0; i < numbers.length; i++) {
    if (largest < numbers[i] ) {
        largest = numbers[i];
    }
}
console.log(largest);

}

findLargestNumber(numbers) // 12