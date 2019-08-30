const cargarPost = document.getElementById("cargar");


cargarPost.addEventListener("click", cargarAPI);


function cargarAPI() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.onload = function() {
        if (this.status === 200) {
            const arregloPosts = JSON.parse(this.responseText);
            let contenido = "";
            arregloPosts.forEach(post => {
                contenido += `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });

            document.getElementById("listado").innerHTML = contenido;
        }
    }

    xhr.send();
}