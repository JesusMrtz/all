let enlaces = document.querySelectorAll("#principal .enlace:nth-child(odd)");


enlaces.forEach(enlace => {
    enlace.style.backgroundColor = "red";
    enlace.style.color = "#fff";
});
console.log(enlaces);