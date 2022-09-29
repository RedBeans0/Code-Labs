let str =
  "I am 10. There are 14, 24 or maybe only 10 water bottles left in the house.";


function countNumbersInSentence(sentence) {
    let res = str.replace(/\D/g, " ");
    console.log(res); 
}

countNumbersInSentence(str); // 4






