let a = 1010101, b, count=0;
function countZeros(num) {
  // Build your logic here
  while(a>0){
    b=a%10
    if(b==0){
      //console.log(b)
      count++
    }
    a=parseInt(a/10)
}
console.log("the number of zeros are:",count)
}
countZeros(a); // 3
