document.body.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target.classList);

    if (e.target.classList.contains("borrar-curso")) {
        console.log("Dando click");
    }
});