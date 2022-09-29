

function woo() {
    document.getElementById(woo).innerHTML = console.log("YOU CLICKED ME!");   
}

document.getElementById("orMe").addEventListener("click", woo);