function sumFinder(arr, sum){
    // Build your logic here
    for(let a = 0; a < arr.length; a++) {
        for(let b = a; b < arr.length; b++) {
           if(arr[a]+arr[b] === sum)
              return [arr[a], arr[b]];
        }
     }
  }
  
  console.log(sumFinder([6,4,3,2,1,7], 9)); // true
  console.log(sumFinder([6,4,3,2,1,7], 2)); // false