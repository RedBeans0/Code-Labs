fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=religious,political') 
  .then((response) => response.json())
  .then((data) => {

  // 1. access element


let imageElement = document.getElementById('joke');

let set = (data.setup);
let del = (data.delivery);

  // 2. store image
  if ((safe) = false) {
console.log("unfunny");
console.log(data);
  } else if (safe = true) {
  console.log(set);
console.log(del);
  }


});