document.addEventListener("DOMContentLoaded", function () {

    let div = document.getElementById("div");

    div.addEventListener("click", function() {
        alert ("Hola! Soy el div")
    });

    let boton = document.getElementById("boton");

    boton.addEventListener("click", function(e) {
        alert ("Hola");
        e.stopPropagation();
    })

    
});