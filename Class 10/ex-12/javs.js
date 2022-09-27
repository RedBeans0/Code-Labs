var arr1 = [-200, -163, -26, -4, 0, 7, 76];

var evens = arr1.filter(function(x) {
  if (x % 2 === 0 || x === 0) {
    return x;
    console.log( x + "are even!")
  } else {

console.log( 'not even.')


  }
})

console.log(evens);

