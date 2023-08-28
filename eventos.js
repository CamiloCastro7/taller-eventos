document.addEventListener("DOMContentLoaded", function () {

function mostrarAlerta() {
    alert("Hola");
}

let div = document.getElementById("div");

div.addEventListener("click", function() {
    alert ("Hola! Soy el div")
});
});