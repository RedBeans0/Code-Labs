document.getElementById("me").addEventListener("click", color);


function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function color() {
    document.getElementById("me").style.color = "red";
}